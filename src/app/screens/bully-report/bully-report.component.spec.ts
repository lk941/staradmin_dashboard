import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullyReportComponent } from './bully-report.component';

describe('BullyReportComponent', () => {
  let component: BullyReportComponent;
  let fixture: ComponentFixture<BullyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
