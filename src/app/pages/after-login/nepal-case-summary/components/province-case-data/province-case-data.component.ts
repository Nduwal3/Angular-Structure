import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NepalCaseSummaryService } from '../../services/nepal-case-summary.service';

@Component({
  selector: 'app-province-case-data',
  templateUrl: './province-case-data.component.html',
  styleUrls: ['./province-case-data.component.scss'],
})
export class ProvinceCaseDataComponent implements OnChanges {
  @Input() provinceData;
  provinceCaseSummary: {};

  constructor(private NCSD: NepalCaseSummaryService) {
    console.log(this.provinceData);
  }

  ngOnChanges(): void {
    let tempData = this.NCSD.filterDataByCovid(this.provinceData, 'province');

    tempData.then((data) => {
      this.provinceCaseSummary = data;
    });
  }
}
