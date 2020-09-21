import { NgModule } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {
  GuestGuardService,
  NepalCoronaService,
  GetNameService,
} from './shared/services';
import { CommonModule } from '@angular/common';

const SERVICES = [
  AuthService,
  GuestGuardService,
  NepalCoronaService,
  GetNameService,
];

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  providers: [...SERVICES],
})
export class CoreModule {}
