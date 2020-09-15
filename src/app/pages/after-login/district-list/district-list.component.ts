import { Component, OnInit } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { NepalCoronaService } from 'src/app/@core/shared/services';
import { NepalCaseSummaryService } from '../nepal-case-summary/services/nepal-case-summary.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss'],
})
export class DistrictListComponent implements OnInit {
  districtList;
  districtNameList = {};
  constructor(private NCSD: NepalCoronaService) {}

  ngOnInit(): void {
    this.getDistrictList();
  }

  getDistrictList() {
    this.districtList = this.NCSD.getDistrictList();

    this.NCSD.getDistrictList().subscribe((data) => {
      console.log(data);
    });

    // this.districtList = this.districtList.pipe(

    // )
  }
}
