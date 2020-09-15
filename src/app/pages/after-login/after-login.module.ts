import { NgModule } from '@angular/core';
import { ChartComponent } from './shared/chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './shared/dummy/dummy.component';
import { MATERIAL_IMPORT } from '../material-import';
import { FeedComponent } from './feed/feed.component';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { NepalCaseSummaryModule } from './nepal-case-summary/nepal-case-summary.module';
import { DistrictListComponent } from './district-list/district-list.component';

const PAGE_COMPONENTS = [
  AfterLoginComponent,
  DashboardComponent,
  FeedComponent,
  ProfileViewComponent,
  DistrictListComponent,
];

const SHARED_COMPONENTS = [ChartComponent, DummyComponent, SidenavComponent];

@NgModule({
  declarations: [...PAGE_COMPONENTS, ...SHARED_COMPONENTS],
  imports: [
    CommonModule,
    ...MATERIAL_IMPORT,
    AfterLoginRoutingModule,
    SharedModule,
    NepalCaseSummaryModule,
  ],
  providers: [],
})
export class AfterLoginModule {}
