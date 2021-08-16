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
import { AppRoutingModule } from './app-routing.module';
import { UserHospitalsListComponent } from './UserHospitalsList/userhospitalslist.component';
import { UserHospitalDetailComponent } from './UserHospitalsList/userhospitaldetail.component';


@NgModule({
  declarations: [
    AppComponent,
    UserHospitalsListComponent,
    UserHospitalDetailComponent,
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
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(HospitalData),
    HttpClientModule,
    RouterModule.forRoot([ ]) 
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
