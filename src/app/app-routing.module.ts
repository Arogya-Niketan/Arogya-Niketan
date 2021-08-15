import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { HospitalCreateGuard } from './HospitalCreate/hospital-create.guard';
import { HospitalCreateComponent } from './HospitalCreate/hospital-create/hospital-create.component';
import { HospitalDetailComponent } from './HospitalDetails/hospital-detail.component';
import { HospitalsListComponent } from './HospitalsList/hospitals-list.component';
import { WelcomeComponent } from './Welcome/welcome.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {path: "hospitalList", component: HospitalsListComponent },
    {path: "hospitals/:id", component: HospitalDetailComponent },
    {path: "welcome", component: WelcomeComponent },
   /*  {path: '', redirectTo: 'welcome', pathMatch: 'full' }, */
   /*  {path: "**", redirectTo: "welcome", pathMatch: "full" }, */ 
    {
      path: 'hospitals/:id/edit',
      canDeactivate: [HospitalCreateGuard],
      component: HospitalCreateComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }