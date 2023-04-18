import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensionPanellKategorieComponent } from './expension-panell-kategorie.component';

describe('ExpensionPanellKategorieComponent', () => {
  let component: ExpensionPanellKategorieComponent;
  let fixture: ComponentFixture<ExpensionPanellKategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensionPanellKategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensionPanellKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
