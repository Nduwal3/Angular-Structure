import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/@core/shared/services';
import { AUTHCONSTANTS } from 'src/app/@core/shared/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn() ? true : false;
  }

  logout() {
    localStorage.removeItem(AUTHCONSTANTS.ACCESS_TOKEN);
    this.router.navigateByUrl('/auth/login');
  }

  toggle() {
    this.toggleSidenav.emit();
  }
}
