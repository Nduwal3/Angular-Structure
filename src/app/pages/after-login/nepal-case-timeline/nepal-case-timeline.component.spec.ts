import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NepalCaseTimelineComponent } from './nepal-case-timeline.component';

describe('NepalCaseTimelineComponent', () => {
  let component: NepalCaseTimelineComponent;
  let fixture: ComponentFixture<NepalCaseTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NepalCaseTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NepalCaseTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
