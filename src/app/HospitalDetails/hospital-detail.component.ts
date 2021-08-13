import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent implements OnInit {

  pageTitle: string = "Hospital Detail";

  constructor() { }

  ngOnInit() {
  }

}
