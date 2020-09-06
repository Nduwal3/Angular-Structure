import { NgModule } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [AuthService];

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [...SERVICES],
  //   exports: [...SERVICES],
})
export class CoreModule {}
