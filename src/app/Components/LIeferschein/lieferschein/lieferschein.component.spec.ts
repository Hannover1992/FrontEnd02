import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieferscheinComponent } from './lieferschein.component';

describe('LieferscheinComponent', () => {
  let component: LieferscheinComponent;
  let fixture: ComponentFixture<LieferscheinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieferscheinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LieferscheinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
