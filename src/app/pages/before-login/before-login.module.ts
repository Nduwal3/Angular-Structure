import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { MATERIAL_IMPORT } from '../material-import';
import { BeforeLoginComponent } from './before-login.component';
import { CoreModule } from '../../@core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
const PAGE_COMPONENT = [LandingComponent, BeforeLoginComponent];

const COMMON_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  CoreModule,
  SharedModule,
];

@NgModule({
  declarations: [...PAGE_COMPONENT],
  imports: [
    RouterModule,
    ...COMMON_MODULE,
    ...MATERIAL_IMPORT,
    BeforeLoginRoutingModule,
    CommonModule,
    SharedModule,
  ],
})
export class BeforeLoginModule {}
