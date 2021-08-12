import { Component, OnInit} from "@angular/core";
import { IHospital } from "./hospital";
import { HospitalService } from "./hospital.service";

@Component({
    selector: 'app-hospitals',
    templateUrl: './hospitals-list.component.html'
})



export class HospitalsListComponent implements OnInit{
    pageTitle: string = "Hospitals List";
    errorMessage = '';
    
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
    this.hospitalService.getHospitals().subscribe({
      next: hospitals => {
        this.hospitals = hospitals;
        this.filteredHospitals = this.hospitals;
      },
      error: err => this.errorMessage = err
    });
  }

   /*  ngOnInit(): void {
        console.log("In OnInit");
    }
 */
}