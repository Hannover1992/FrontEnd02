import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputArtikleForm } from './input-artikle-form.component';

describe('InputFormAssetComponent', () => {
  let component: InputArtikleForm;
  let fixture: ComponentFixture<InputArtikleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputArtikleForm ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputArtikleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
