import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnterKategorieButtonsComponent } from './unter-kategorie-buttons.component';

describe('UnterKategorieButtonsComponent', () => {
  let component: UnterKategorieButtonsComponent;
  let fixture: ComponentFixture<UnterKategorieButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnterKategorieButtonsComponent]
    });
    fixture = TestBed.createComponent(UnterKategorieButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
