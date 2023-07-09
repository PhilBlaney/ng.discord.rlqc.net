import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameHistoryComponent } from './name-history.component';

describe('NameHistoryComponent', () => {
  let component: NameHistoryComponent;
  let fixture: ComponentFixture<NameHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameHistoryComponent]
    });
    fixture = TestBed.createComponent(NameHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
