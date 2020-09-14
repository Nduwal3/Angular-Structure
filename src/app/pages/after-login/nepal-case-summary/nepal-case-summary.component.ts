import { Component, OnInit } from '@angular/core';
import { NepalCoronaService } from 'src/app/@core/shared/services';

@Component({
  selector: 'app-nepal-case-summary',
  templateUrl: './nepal-case-summary.component.html',
  styleUrls: ['./nepal-case-summary.component.scss'],
})
export class NepalCaseSummaryComponent implements OnInit {
  ndcsData: any;

  provinceData: {};
  districtData: {};
  caseData: {};

  constructor(private nepalCoronaService: NepalCoronaService) {}

  ngOnInit(): void {
    this.getCasesSummary();
  }

  getCasesSummary() {
    this.nepalCoronaService
      .getNepalDetailedCasesSummaryData()
      .subscribe(async (data) => {
        if (data.province) {
          this.provinceData = data.province;
        }
        if (data.district) {
          this.districtData = data.district;
        }

        // if (data && data.province) {
        // await this.filterDataByProvince(data.province);
        // }
      }),
      (error) => {
        console.log(error);
      };
  }
}
