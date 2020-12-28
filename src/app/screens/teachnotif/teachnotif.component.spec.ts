import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachnotifComponent } from './teachnotif.component';

describe('TeachnotifComponent', () => {
  let component: TeachnotifComponent;
  let fixture: ComponentFixture<TeachnotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachnotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
