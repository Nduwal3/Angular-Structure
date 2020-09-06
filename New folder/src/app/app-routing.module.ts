import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component'
import { LoginComponent } from '../app/pages/login/login.component'
import { SignupComponent } from '../app/pages/signup/signup.component'


const routes: Routes = [
  {
    path:'dashboard',
    component : DashboardComponent,
  },
  {
    path:'login',
    component : LoginComponent,
  },
  {
    path:'signup',
    component : SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
