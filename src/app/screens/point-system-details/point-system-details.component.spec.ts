import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSystemDetailsComponent } from './point-system-details.component';

describe('PointSystemDetailsComponent', () => {
  let component: PointSystemDetailsComponent;
  let fixture: ComponentFixture<PointSystemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSystemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSystemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
