import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HospitalsListComponent } from './HospitalsList/hospitals-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalDetailComponent } from './HospitalDetails/hospital-detail.component';

import { RouterLinkActive, RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WelcomeComponent } from './Welcome/welcome.component';
import { HospitalCreateComponent } from './HospitalCreate/hospital-create/hospital-create.component';
import { HospitalData } from './HospitalCreate/hospital-data';
import { HospitalCreateGuard } from './HospitalCreate/hospital-create.guard';
import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AlertComponent } from './_components';


@NgModule({
  declarations: [
    AppComponent,
    HospitalsListComponent,
    HospitalDetailComponent,
    HospitalCreateComponent,
    WelcomeComponent,
    HospitalCreateComponent,
    AlertComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(HospitalData),
    HttpClientModule,
    RouterModule.forRoot([
      {path: "hospitalList", component: HospitalsListComponent },
      {path: "hospitals/:id", component: HospitalDetailComponent },
      {path: "welcome", component: WelcomeComponent },
     /*  {path: '', redirectTo: 'welcome', pathMatch: 'full' }, */
     /*  {path: "**", redirectTo: "welcome", pathMatch: "full" }, */ 
      {
        path: 'hospitals/:id/edit',
        canDeactivate: [HospitalCreateGuard],
        component: HospitalCreateComponent
      }
    ]) 
    ],


    
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
