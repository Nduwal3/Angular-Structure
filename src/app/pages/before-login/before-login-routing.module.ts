import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BeforeLoginComponent } from './before-login.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { GuestGuardService } from 'src/app/@core/shared/services';

const ROUTES: Routes = [
  {
    path: '',
    component: BeforeLoginComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
        canActivate: [GuestGuardService],
      },
      {
        path: '',
        component: LandingComponent,
      },
    ],
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
