import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { MATERIAL_IMPORT } from '../material-import';
import { BeforeLoginComponent } from './before-login.component';
import { CoreModule } from '../../@core/core.module';
import { CommonModule } from '@angular/common';

const PAGE_COMPONENT = [
  LoginComponent,
  ResetPasswordComponent,
  SignupComponent,
  LandingComponent,
  BeforeLoginComponent,
];

const COMMON_MODULE = [FormsModule, ReactiveFormsModule, CoreModule];

@NgModule({
  declarations: [...PAGE_COMPONENT],
  imports: [
    ...COMMON_MODULE,
    ...MATERIAL_IMPORT,
    BeforeLoginRoutingModule,
    CommonModule,
  ],
})
export class BeforeLoginModule {}
