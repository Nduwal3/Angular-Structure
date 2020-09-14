import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictCaseDataComponent } from './district-case-data.component';

describe('DistrictCaseDataComponent', () => {
  let component: DistrictCaseDataComponent;
  let fixture: ComponentFixture<DistrictCaseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictCaseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictCaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
