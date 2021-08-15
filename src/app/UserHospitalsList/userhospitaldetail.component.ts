import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHospital } from '../HospitalsList/hospital';
import { HospitalService } from '../HospitalsList/hospital.service';

@Component({
  //selector: 'app-hospital-detail',
  templateUrl: './userhospitaldetail.component.html',
  
})
export class UserHospitalDetailComponent implements OnInit {

  pageTitle: string = "";
  errorMessage = '';
  hospital: IHospital | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private hospitalService: HospitalService) {
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `${id}`;
    if (id) {
      this.getHospital(id);
    }
  }

  getHospital(id: number): void {
    this.hospitalService.getHospital(id).subscribe({
      next: hospital => this.hospital = hospital,
      error: err => this.errorMessage = err
    });
  }
  

  

}
