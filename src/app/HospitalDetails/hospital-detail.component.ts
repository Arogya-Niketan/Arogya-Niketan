import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHospital } from '../Hospitals/hospital';

@Component({
  //selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent implements OnInit {

  pageTitle: string = "";
  hospital: IHospital | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const hospitalName = String(this.route.snapshot.paramMap.get("hospitalName"));
    this.pageTitle += `${hospitalName}`;
  }

  onBack(): void{
    this.router.navigate(["/hospitalList"]);
  }

}
