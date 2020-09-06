import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public days: number = 5;
  public week: number = 10;

  constructor() {}

  ngOnInit(): void {}

  updateDaysAndWeek() {
    this.days = this.days + 1;
    this.week = this.week + 1;
  }
}
