import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseComponent } from './lease.component';

describe('LeaseComponent', () => {
  let component: LeaseComponent;
  let fixture: ComponentFixture<LeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
