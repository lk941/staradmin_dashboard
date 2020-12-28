import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhqReportComponent } from './phq-report.component';

describe('PhqReportComponent', () => {
  let component: PhqReportComponent;
  let fixture: ComponentFixture<PhqReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhqReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhqReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
