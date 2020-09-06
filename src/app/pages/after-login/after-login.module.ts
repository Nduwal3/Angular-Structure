import { NgModule } from '@angular/core';
import { ChartComponent } from './shared/chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './shared/dummy/dummy.component';
import { MATERIAL_IMPORT } from '../material-import';
import { FeedComponent } from './feed/feed.component';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';

const PAGE_COMPONENTS = [
  AfterLoginComponent,
  DashboardComponent,
  FeedComponent,
];

const SHARED_COMPONENTS = [ChartComponent, DummyComponent];

@NgModule({
  declarations: [...PAGE_COMPONENTS, ...SHARED_COMPONENTS],
  imports: [CommonModule, ...MATERIAL_IMPORT, AfterLoginRoutingModule],
  providers: [],
})
export class AfterLoginModule {}
