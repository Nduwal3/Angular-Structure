import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MATERIAL_IMPORT } from '../../material-import';
import { RouterModule } from '@angular/router';

const PAGE_COMPONENT = [
  LoginComponent,
  ResetPasswordComponent,
  SignupComponent,
  AuthComponent,
];

const COMMON_MODULE = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...PAGE_COMPONENT],
  imports: [
    ...COMMON_MODULE,
    ...MATERIAL_IMPORT,
    AuthRoutingModule,
    CommonModule,
    RouterModule,
  ],
})
export class AuthModule {}
