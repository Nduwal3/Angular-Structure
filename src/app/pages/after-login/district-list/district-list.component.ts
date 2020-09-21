import { Component, Input, OnInit } from '@angular/core';
import { GetNameService } from 'src/app/@core/shared/services';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss'],
})
export class DistrictListComponent implements OnInit {
  @Input() districtId;
  districtName = 'loading....';
  districtNameData;
  constructor(private getNameService: GetNameService) {}

  ngOnInit(): void {
    this.getDistrictNameById();
  }

  getDistrictNameById() {
    this.districtNameData = this.getNameService.getDistrictNames(
      this.districtId
    );
    console.log(this.districtNameData);
  }
}
