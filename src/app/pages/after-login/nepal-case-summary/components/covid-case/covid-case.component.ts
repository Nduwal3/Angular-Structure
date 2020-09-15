import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NepalCaseSummaryService } from '../../services/nepal-case-summary.service';

@Component({
  selector: 'app-covid-case',
  templateUrl: './covid-case.component.html',
  styleUrls: ['./covid-case.component.scss'],
})
export class CovidCaseComponent implements OnChanges {
  @Input() caseData;
  @Input() caseKey;

  result = {};
  constructor(private NCSD: NepalCaseSummaryService) {}

  ngOnChanges(): void {
    console.log(this.caseData);
    let tempData = this.NCSD.filterDataByCovid(this.caseData, this.caseKey);

    tempData.then((data) => {
      this.result = data;
    });
  }
}
