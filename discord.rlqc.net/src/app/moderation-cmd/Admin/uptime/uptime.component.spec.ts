import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeComponent } from './uptime.component';

describe('UptimeComponent', () => {
  let component: UptimeComponent;
  let fixture: ComponentFixture<UptimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UptimeComponent]
    });
    fixture = TestBed.createComponent(UptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
