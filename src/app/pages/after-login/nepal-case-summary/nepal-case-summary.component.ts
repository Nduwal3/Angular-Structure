import { Component, OnInit } from '@angular/core';
import { NepalCoronaService } from 'src/app/@core/shared/services';

@Component({
  selector: 'app-nepal-case-summary',
  templateUrl: './nepal-case-summary.component.html',
  styleUrls: ['./nepal-case-summary.component.scss'],
})
export class NepalCaseSummaryComponent implements OnInit {
  ndcsData: any;
  provinceCaseSummary: {};

  constructor(private nepalCoronaService: NepalCoronaService) {}

  ngOnInit(): void {
    this.getCasesSummary();
  }

  getCasesSummary() {
    this.nepalCoronaService
      .getNepalDetailedCasesSummaryData()
      .subscribe(async (data) => {
        this.ndcsData = data;

        if (data && data.province) {
          await this.filterDataByProvince(data.province);
        }
      }),
      (error) => {
        console.log(error);
      };
  }

  async filterDataByProvince(provinceData) {
    this.provinceCaseSummary = {};
    if (provinceData.cases) {
      let provinceNames = await this.getProvinceList(provinceData.cases);

      for (let key in provinceData) {
        provinceData[key].map((value) => {
          provinceNames.map((name) => {
            if (name === value.province) {
              if (!this.provinceCaseSummary[name]) {
                this.provinceCaseSummary[name] = {};
              }

              // let data = {};

              // data[key] = value.count;
              this.provinceCaseSummary[name][key] = value.count;
            }
          });
        });
        // keys = cases, active, recovered , deaths
      }
      // let provinceCaseSummary = {
      //   1: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   2: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   3: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   4: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   5: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      // };
    }
    console.log(this.provinceCaseSummary);
    return this.provinceCaseSummary;
  }

  getProvinceList(data): Array<number> {
    let provinceList: Array<number> = [];
    data.map((value) => provinceList.push(value.province));
    return provinceList;
  }
}
