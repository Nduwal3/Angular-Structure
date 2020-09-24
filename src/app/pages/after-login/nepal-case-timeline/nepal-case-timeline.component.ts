import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NepalCoronaService } from 'src/app/@core/shared/services';

@Component({
  selector: 'app-nepal-case-timeline',
  templateUrl: './nepal-case-timeline.component.html',
  styleUrls: ['./nepal-case-timeline.component.scss'],
})
export class NepalCaseTimelineComponent implements OnInit {
  timelineData = [];
  timelineDayData: any = {};
  chosenDate = new FormControl(new Date());
  constructor(private NCSD: NepalCoronaService) {}

  ngOnInit(): void {
    this.getNepalCovidTimeline();
    // this.getData('today');
  }

  getNepalCovidTimeline() {
    const httpReq = this.NCSD.getNepalCasesTimeline();
    httpReq.subscribe(
      (data) => {
        console.log(data);
        this.timelineDayData = data[data.length - 2];
        this.timelineData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getData(of: string) {
    if (of == 'today') {
      this.timelineDayData = this.timelineData[this.timelineData.length - 2];
    } else if (of == 'yesterday') {
      this.timelineDayData = this.timelineData[this.timelineData.length - 3];
    } else if (of == '3days') {
      this.timelineDayData = this.timelineData[this.timelineData.length - 4];
    }
  }

  onDateChange(cDate) {
    const naData = {
      date: cDate,
      newCases: 'NA',
      newDeaths: 'NA',
      newRecoveries: 'NA',
      totalCases: 'NA',
      totalRecoveries: 'NA',
      totalDeaths: 'NA',
    };
    const firstDate: any = new Date(this.timelineData[0].date);
    const currentDate: any = new Date();
    const chosenDate: any = new Date(cDate);

    let dofferenceFromFirstDate =
      (chosenDate - firstDate) / (24 * 60 * 60 * 1000);
    let dayDifference: number =
      (currentDate - chosenDate) / (24 * 60 * 60 * 1000);

    if (dayDifference >= 0 && dofferenceFromFirstDate > 0) {
      this.timelineDayData = this.timelineData[
        this.timelineData.length - (Math.trunc(dayDifference) + 2)
      ];
    } else {
      this.timelineDayData = naData;
    }
  }
}
