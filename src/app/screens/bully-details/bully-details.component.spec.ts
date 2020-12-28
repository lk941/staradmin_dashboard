import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullyDetailsComponent } from './bully-details.component';

describe('BullyDetailsComponent', () => {
  let component: BullyDetailsComponent;
  let fixture: ComponentFixture<BullyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
