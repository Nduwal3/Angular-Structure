import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/shared/services';
import { AUTHCONSTANTS } from 'src/app/@core/shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // let val = this.authService.isLoggedIn()
    console.log(this.authService.isLoggedIn());
    this.isLoggedIn = this.authService.isLoggedIn() ? true : false;
  }

  logout() {
    localStorage.removeItem(AUTHCONSTANTS.ACCESS_TOKEN);
    this.router.navigateByUrl('/auth/login');
  }

  signup() {
    this.router.navigateByUrl('/auth/signup');
  }

  login() {
    this.router.navigateByUrl('/auth/login');
  }
}
