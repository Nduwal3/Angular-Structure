import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NepalCaseSummaryComponent } from './nepal-case-summary.component';
import { MATERIAL_IMPORT } from '../../material-import';
import { NepalCaseSummaryService } from './services/nepal-case-summary.service';
import { ProvinceCaseDataComponent } from '../nepal-case-summary/components/province-case-data/province-case-data.component';
import { DistrictCaseDataComponent } from '../nepal-case-summary/components/district-case-data/district-case-data.component';
import { CovidCaseComponent } from './components/covid-case/covid-case.component';
import { DistrictListComponent } from '../district-list/district-list.component';

const PAGE_COMPONENTS = [
  NepalCaseSummaryComponent,
  ProvinceCaseDataComponent,
  DistrictCaseDataComponent,
  DistrictListComponent,
];

const SHARED_COMPONENTS = [];

@NgModule({
  declarations: [...PAGE_COMPONENTS, CovidCaseComponent],
  imports: [CommonModule, ...MATERIAL_IMPORT],
  providers: [NepalCaseSummaryService],
  exports: [DistrictListComponent],
})
export class NepalCaseSummaryModule {}
