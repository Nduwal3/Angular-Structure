import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BeforeLoginComponent } from './before-login.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

const ROUTES: Routes = [
  {
    path: '',
    component: BeforeLoginComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'reset',
        component: ResetPasswordComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'landing',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class BeforeLoginRoutingModule {}
