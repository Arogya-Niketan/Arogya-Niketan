import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IHospital } from 'src/app/HospitalsList/hospital';
import { HospitalService } from 'src/app/HospitalsList/hospital.service';
import { GenericValidator } from './generic-validator';

@Component({
  selector: 'app-hospital-create',
  templateUrl: './hospital-create.component.html',
  styleUrls: ['./hospital-create.component.css']
})
export class HospitalCreateComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, {read: ElementRef }) formInputElements: ElementRef[];

  pageTitle = 'Hospital Create';
  errorMessage: string;
  hospitalForm: FormGroup;

  hospital: IHospital;
  private sub: Subscription;


  displayMessage: {[key: string]: string } ={};
  private validationMessages: {[key:string]: {[key:string]: string }};
 private genericValidator: GenericValidator;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private hospitalService: HospitalService
  ) { 

    this.validationMessages ={
      hospitalName: {
        required: 'Hospital name is required.',
        minlength: 'Hospital name must be at least ten characters.',
        maxlength: 'Hospital name cannot exceed 50 characters.'
      },
      phone: {
        required: 'Hospital phone number is required.'
      },
      email: {
        required: 'Hospital email is required.'
      },
      location: {
        required: 'Hospital location is required.'
      },
      address: {
        required: 'Hospital address is required.'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }


  ngOnInit(): void {
    this.hospitalForm=this.fb.group({
      hospitalName: ['',[Validators.required,
                         Validators.minLength(10),
                         Validators.maxLength(50)]],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      location: ['', Validators.required],
      address: ['', Validators.required],
      bedsAvailable: '',
      ventilation: '',
      criticalCareUnit: '',
      isolationWard: ''
    });

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getHospital(id);
      }
    );
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.hospitalForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.hospitalForm);
    });
  }

  getHospital(id: number): void {
    this.hospitalService.getHospital(id)
      .subscribe({
        next: (hospital: IHospital) => this.displayHospital(hospital),
        error: err => this.errorMessage = err
      });
  }

  displayHospital(hospital: IHospital): void {
    if (this.hospitalForm) {
      this.hospitalForm.reset();
    }
    this.hospital = hospital;

    if (this.hospital.id === 0) {
      this.pageTitle = 'Add Hospital';
    } else {
      this.pageTitle = `Edit Hospital: ${this.hospital.hospitalName}`;
    }

    this.hospitalForm.patchValue({
      hospitalName: this.hospital.hospitalName,
      phone: this.hospital.phone,
      email: this.hospital.email,
      location: this.hospital.location,
      address: this.hospital.address,
      bedsAvailable: this.hospital.bedsAvailable,
      ventilation: this.hospital.ventilation,
      criticalCareUnit: this.hospital.criticalCareUnit,
      isolationWard: this.hospital.isolationWard
    });
  }

  deleteHospital(): void {
    if (this.hospital.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.hospital.hospitalName}?`)) {
        this.hospitalService.deleteHospital(this.hospital.id)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
      }
    }
  }

  saveHospital(): void {
    if (this.hospitalForm.valid) {
      if (this.hospitalForm.dirty) {
        const h = { ...this.hospital, ...this.hospitalForm.value };

        if (h.id === 0) {
          this.hospitalService.createHospital(h)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else {
          this.hospitalService.updateHospital(h)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    this.hospitalForm.reset();
   this.router.navigate(['/hospitalsList']);
    
  }

 


}
