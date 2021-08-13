import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHospital } from '../Hospitals/hospital';
import { HospitalService } from '../Hospitals/hospital.service';

@Component({
  //selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent implements OnInit {

  pageTitle: string = "";
  errorMessage = '';
  hospital: IHospital | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private hospitalService: HospitalService) {
}

  ngOnInit(): void {
    const hospitalName = String(this.route.snapshot.paramMap.get("hospitalName"));
    this.pageTitle += `${hospitalName}`;
    if (hospitalName) {
      this.getHospital(hospitalName);
    }
  }

  getHospital(hospitalName: String): void {
    this.hospitalService.getHospital(hospitalName).subscribe({
      next: hospital => this.hospital = hospital,
      error: err => this.errorMessage = err
    });
  }
  

  onBack(): void{
    this.router.navigate(["/hospitalList"]);
  }

}
