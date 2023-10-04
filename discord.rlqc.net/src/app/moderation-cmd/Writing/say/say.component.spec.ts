import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayComponent } from './say.component';

describe('SayComponent', () => {
  let component: SayComponent;
  let fixture: ComponentFixture<SayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SayComponent]
    });
    fixture = TestBed.createComponent(SayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
