import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <div class="container-fluid bg-secondary">
      <a class='navbar-brand h1 text-white m-1 p-1' routerLinkActive='active' routerLink='/welcome'><img src="./assets/images/Screensh1.png" alt="" width="30" height="24" class="d-inline-block align-text-top ">{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link text-white' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link text-white' routerLinkActive='active' routerLink='/hospitalList'>Hospital List</a></li>
      </ul>
      </div>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pageTitle = 'Arogya-Niketan';
}
