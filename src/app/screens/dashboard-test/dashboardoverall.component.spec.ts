import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverallComponent } from './dashboardoverall.component';

describe('DashboardOverallComponent', () => {
  let component: DashboardOverallComponent;
  let fixture: ComponentFixture<DashboardOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
