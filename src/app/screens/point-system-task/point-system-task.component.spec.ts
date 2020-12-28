import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSystemTaskComponent } from './point-system-task.component';

describe('PointSystemTaskComponent', () => {
  let component: PointSystemTaskComponent;
  let fixture: ComponentFixture<PointSystemTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointSystemTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSystemTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
