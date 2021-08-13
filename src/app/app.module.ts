import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HospitalsListComponent } from './Hospitals/hospitals-list.component';
import { FormsModule } from '@angular/forms';
import { HospitalDetailComponent } from './HospitalDetails/hospital-detail.component';

import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './Welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalsListComponent,
    HospitalDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "hospitalList", component: HospitalsListComponent },
      {path: "hospitals/:hospitalName", component: HospitalDetailComponent },
      {path: "welcome", component: WelcomeComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full' },
      {path: "**", redirectTo: "welcome", pathMatch: "full" }
    ]) 
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
