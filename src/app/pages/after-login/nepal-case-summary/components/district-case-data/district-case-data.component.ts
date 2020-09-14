import { Component, Input, OnChanges } from '@angular/core';
import { NepalCaseSummaryService } from '../../services/nepal-case-summary.service';

@Component({
  selector: 'app-district-case-data',
  templateUrl: './district-case-data.component.html',
  styleUrls: ['./district-case-data.component.scss'],
})
export class DistrictCaseDataComponent implements OnChanges {
  @Input() districtData;
  districtCaseSummary = {};

  constructor(private NCSD: NepalCaseSummaryService) {}

  ngOnChanges(): void {
    console.log(this.districtData);
    let tempData = this.NCSD.filterDataByCovid(this.districtData, 'district');

    tempData.then((data) => {
      this.districtCaseSummary = data;
    });
  }
}
