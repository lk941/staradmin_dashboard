import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSystemRewardsComponent } from './point-system-rewards.component';

describe('PointSystemRewardsComponent', () => {
  let component: PointSystemRewardsComponent;
  let fixture: ComponentFixture<PointSystemRewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSystemRewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSystemRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
