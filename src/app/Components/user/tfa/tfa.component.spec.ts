import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoFactorAuth } from './tfa.component';

describe('TFAComponent', () => {
  let component: TwoFactorAuth;
  let fixture: ComponentFixture<TwoFactorAuth>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoFactorAuth]
    });
    fixture = TestBed.createComponent(TwoFactorAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
