import { Component, OnInit } from '@angular/core';
import { NepalCoronaService } from 'src/app/@core/shared/services';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  constructor(private nepalCoronaService: NepalCoronaService) {}

  ngOnInit(): void {
    this.getCasesSummary();
  }
  data: any;

  getCasesSummary() {
    this.nepalCoronaService.getNepalTestingSummaryData().subscribe((data) => {
      console.log(data);
      this.data = data;
    }),
      (error) => {
        console.log(error);
      };
  }
}
