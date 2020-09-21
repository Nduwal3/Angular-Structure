import { Component, OnInit } from '@angular/core';
import { GetNameService } from 'src/app/@core/shared/services';

@Component({
  selector: 'app-after-login',
  // template: '<app-sidenav></app-sidenav>',
  templateUrl: 'after-login.component.html',
})
export class AfterLoginComponent implements OnInit {
  constructor(private getNameService: GetNameService) {}

  ngOnInit() {
    this.getNameService.getDistrictListFirstTime();
  }
}
