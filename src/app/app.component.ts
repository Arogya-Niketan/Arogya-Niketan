import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- <nav class='navbar navbar-expand navbar-light bg-light'>
  <div class="container-fluid bg-secondary">
      <a class='navbar-brand h1 text-white m-1 p-1' routerLinkActive='active' routerLink='/welcome'><img src="./assets/images/Screensh1.png" alt="" width="30" height="24" class="d-inline-block align-text-top ">{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link text-white' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link text-white' routerLinkActive='active' routerLink='/hospitalList'>Hospital List</a></li>
        <li ><a class='nav-link text-white' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}"
        [routerLink]="['/hospitals/0/edit']">Add Hospital</a>
  </li>
      </ul>
      </div>
  </nav> -->
  
   <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pageTitle = 'Arogya-Niketan';
}
