import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepalCaseSummaryComponent } from './nepal-case-summary.component';

describe('NepalCaseSummaryComponent', () => {
  let component: NepalCaseSummaryComponent;
  let fixture: ComponentFixture<NepalCaseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepalCaseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepalCaseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
