import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class FormInitializationService {
  constructor(private fb: FormBuilder) {}

  initArtikelForm(): FormGroup {
    return this.fb.group({
      asset_details: this.initAssetDetails(),
      asset_numbers: this.initAssetNumbers(),
      date_info: this.initDateInfo(),
    });
  }

  private initAssetDetails(): FormGroup {
    return this.fb.group({
      firma: [''],
      artikelname: [''],
      model: [''],
      zustand: [''],
      beschreibung: [''],
    });
  }

  private initAssetNumbers(): FormGroup {
    return this.fb.group({
      menge: [1, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        this.positiveNonZero
      ])],
      preis: [''],
      Inventarnummer: [0],
      anlagenummer: [''],
      serriennummer: [''],
    });
  }

  private initDateInfo(): FormGroup {
    return this.fb.group({
      einkaufs_datum: [new Date()],
      edit_date: [new Date()],
      belegt_von: [new Date()],
      belegt_bis: [new Date()],
    });
  }

  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return { nonPositiveOrZero: true };
    }
    return null;
  }
}
