import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieNameButtonsComponent } from './kategorie-name-buttons.component';

describe('KategorieNameButtonsComponent', () => {
  let component: KategorieNameButtonsComponent;
  let fixture: ComponentFixture<KategorieNameButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KategorieNameButtonsComponent]
    });
    fixture = TestBed.createComponent(KategorieNameButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
