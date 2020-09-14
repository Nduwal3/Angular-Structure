import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginComponent } from './after-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { FeedComponent } from './feed/feed.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { NepalCaseSummaryComponent } from './nepal-case-summary/nepal-case-summary.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AfterLoginComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'login',
        component: ProfileViewComponent,
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'profile',
        component: ProfileViewComponent,
      },
      {
        path: 'nepal-cases-summary',
        component: NepalCaseSummaryComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
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
export class AfterLoginRoutingModule {}
