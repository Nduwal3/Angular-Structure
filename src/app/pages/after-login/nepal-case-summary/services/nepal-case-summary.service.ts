import { Injectable } from '@angular/core';
@Injectable()
export class NepalCaseSummaryService {
  covidCaseSummary = {};

  async filterDataByCovid(covidData: any, caseKey: string) {
    if (covidData.cases) {
      let covidNames = await this.getCovidList(covidData.cases, caseKey);
      this.covidCaseSummary = {};
      for (let key in covidData) {
        covidData[key].map((value) => {
          covidNames.map((name) => {
            if (name === value[caseKey]) {
              if (!this.covidCaseSummary[name]) {
                this.covidCaseSummary[name] = {};
              }
              this.covidCaseSummary[name][key] = value.count;
            }
          });
        });
        // keys = cases, active, recovered , deaths
      }
      // let covidCaseSummary = {
      //   1: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   2: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   3: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   4: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      //   5: { cases: 1, death: 2, active: 3, recovered: 4, deaths: 5 },
      // };
    }
    console.log(this.covidCaseSummary);
    return this.covidCaseSummary;
  }

  getCovidList(data, caseKey): Array<number> {
    let covidList: Array<number> = [];
    data.map((value) => covidList.push(value[caseKey]));
    return covidList;
  }
}
