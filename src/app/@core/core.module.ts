import { NgModule } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GuestGuardService, NepalCoronaService } from './shared/services';

const SERVICES = [AuthService, GuestGuardService, NepalCoronaService];

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [...SERVICES],
})
export class CoreModule {}
