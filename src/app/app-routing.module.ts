import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './@core/shared/services';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/after-login/after-login.module').then(
        (mod) => mod.AfterLoginModule
      ),
    canActivate: [LoginGuardService],
  },
  {
    // Lazy-loading modules from before login component
    path: '',
    loadChildren: () =>
      import('./pages/before-login/before-login.module').then(
        (mod) => mod.BeforeLoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
