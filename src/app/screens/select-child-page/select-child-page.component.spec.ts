import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChildPageComponent } from './select-child-page.component';

describe('SelectChildPageComponent', () => {
  let component: SelectChildPageComponent;
  let fixture: ComponentFixture<SelectChildPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChildPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
