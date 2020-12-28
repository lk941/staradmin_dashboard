import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachAddChildComponent } from './teach-add-child.component';

describe('TeachAddChildComponent', () => {
  let component: TeachAddChildComponent;
  let fixture: ComponentFixture<TeachAddChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachAddChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachAddChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
