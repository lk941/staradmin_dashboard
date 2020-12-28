import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallDashComponent } from './dash-overall.component';

describe('OverallDashComponent', () => {
  let component: OverallDashComponent;
  let fixture: ComponentFixture<OverallDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
