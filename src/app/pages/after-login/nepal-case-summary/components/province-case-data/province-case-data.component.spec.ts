import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceCaseDataComponent } from './province-case-data.component';

describe('ProvinceCaseDataComponent', () => {
  let component: ProvinceCaseDataComponent;
  let fixture: ComponentFixture<ProvinceCaseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceCaseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceCaseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
