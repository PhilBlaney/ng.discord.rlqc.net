import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRotationComponent } from './message-rotation.component';

describe('MessageRotationComponent', () => {
  let component: MessageRotationComponent;
  let fixture: ComponentFixture<MessageRotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageRotationComponent]
    });
    fixture = TestBed.createComponent(MessageRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
