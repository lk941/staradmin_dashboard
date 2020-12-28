import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachParConfirmationComponent } from './teach-par-confirmation.component';

describe('TeachParConfirmationComponent', () => {
  let component: TeachParConfirmationComponent;
  let fixture: ComponentFixture<TeachParConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachParConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachParConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
