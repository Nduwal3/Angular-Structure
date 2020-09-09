import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuestGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.authService.isLoggedIn());
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/user/dashboard');
      return false;
    } else {
      return true;
    }
  }
}
