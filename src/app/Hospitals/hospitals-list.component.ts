import { Component, OnDestroy, OnInit} from "@angular/core";
import { Subscription } from "rxjs";
import { IHospital } from "./hospital";
import { HospitalService } from "./hospital.service";

@Component({
    selector: 'app-hospitals',
    templateUrl: './hospitals-list.component.html'
})



export class HospitalsListComponent implements OnInit, OnDestroy{
    pageTitle: string = "Hospitals List";
    errorMessage = '';
    sub!: Subscription;
    
    private _listFilter: string="";
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter=value;
        console.log("In setter:", value);
        this.filteredHospitals = this.performFilter(value);
    }

    filteredHospitals: IHospital[] = [];

   hospitals: IHospital[]=[];

   constructor(private hospitalService: HospitalService) {}

    performFilter(filterBy: string): IHospital[] {
filterBy = filterBy.toLocaleLowerCase();
return this.hospitals.filter((hospital: IHospital) =>
hospital.location.toLocaleLowerCase().includes(filterBy));
    }

    
  ngOnInit(): void {
    this.sub = this.hospitalService.getHospitals().subscribe({
      next: hospitals => {
        this.hospitals = hospitals;
        this.filteredHospitals = this.hospitals;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

   /*  ngOnInit(): void {
        console.log("In OnInit");
    }
 */
}