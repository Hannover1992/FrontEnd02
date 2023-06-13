import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputArtikelForm } from './input-artikle-form.component';

describe('InputFormAssetComponent', () => {
  let component: InputArtikelForm;
  let fixture: ComponentFixture<InputArtikelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputArtikelForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputArtikelForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
