import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LokaleBookingComponent } from './lokale-booking.component';

describe('LokaleBookingComponent', () => {
  let component: LokaleBookingComponent;
  let fixture: ComponentFixture<LokaleBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LokaleBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LokaleBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
