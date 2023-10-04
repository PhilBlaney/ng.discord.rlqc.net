import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildInfoComponent } from './guild-info.component';

describe('GuildInfoComponent', () => {
  let component: GuildInfoComponent;
  let fixture: ComponentFixture<GuildInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuildInfoComponent]
    });
    fixture = TestBed.createComponent(GuildInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
