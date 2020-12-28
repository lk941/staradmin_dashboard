import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentportalsignComponent } from './parentportalsign.component';

describe('ParentportalsignComponent', () => {
  let component: ParentportalsignComponent;
  let fixture: ComponentFixture<ParentportalsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentportalsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentportalsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
