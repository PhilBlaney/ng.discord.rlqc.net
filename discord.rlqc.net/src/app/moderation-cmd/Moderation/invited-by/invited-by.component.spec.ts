import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedByComponent } from './invited-by.component';

describe('InvitedByComponent', () => {
  let component: InvitedByComponent;
  let fixture: ComponentFixture<InvitedByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvitedByComponent]
    });
    fixture = TestBed.createComponent(InvitedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
