import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopmsgDialogComponent } from './loopmsg-dialog.component';

describe('LoopmsgDialogComponent', () => {
  let component: LoopmsgDialogComponent;
  let fixture: ComponentFixture<LoopmsgDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoopmsgDialogComponent]
    });
    fixture = TestBed.createComponent(LoopmsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
