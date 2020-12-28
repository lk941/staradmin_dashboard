import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInsightComponent } from './child-insight.component';

describe('ChildInsightComponent', () => {
  let component: ChildInsightComponent;
  let fixture: ComponentFixture<ChildInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
