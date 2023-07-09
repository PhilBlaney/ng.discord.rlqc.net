import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerationCmdComponent } from './moderation-cmd.component';

describe('ModerationCmdComponent', () => {
  let component: ModerationCmdComponent;
  let fixture: ComponentFixture<ModerationCmdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModerationCmdComponent]
    });
    fixture = TestBed.createComponent(ModerationCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
