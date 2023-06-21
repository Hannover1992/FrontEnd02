import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

export class InitializationArticle {

  constructor(
    private fb: FormBuilder,
  ) {
  }

  initForm() {
    return this.fb.group({
      asset_details: this.initAssetDetails(),
      asset_numbers: this.initAssetNumbers(),
      date_info: this.initDateInfo(),
    });
  }

  initAssetDetails(): FormGroup {
    return this.fb.group({
      firma: [''],
      // artikelname: ['', Validators.pattern('^[0-9]*$')],
      artikelname: ['', Validators.required],
      model: [''],
      zustand: [''],
      beschreibung: [''],
    });
  }

  initAssetNumbers(): FormGroup {
    return this.fb.group({
      menge: [1, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        this.positiveNonZero // Make sure you have defined this custom validator function
      ])],
      preis: [''],
      // Inventarnummer: [0],
      anlagenummer: [''],
      serriennummer: [''],
    });
  }


  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return {nonPositiveOrZero: true};
    }
    return null;
  }

  initDateInfo(): FormGroup {
    return this.fb.group({
      einkaufs_datum: [new Date()],
      edit_date: [new Date()],
      belegt_von: [new Date()],
      belegt_bis: [new Date()],
    });
  }

}
