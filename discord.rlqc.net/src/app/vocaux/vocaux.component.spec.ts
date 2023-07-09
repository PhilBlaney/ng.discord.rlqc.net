import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocauxComponent } from './vocaux.component';

describe('VocauxComponent', () => {
  let component: VocauxComponent;
  let fixture: ComponentFixture<VocauxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocauxComponent]
    });
    fixture = TestBed.createComponent(VocauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
