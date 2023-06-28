import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../../../../Interface/article";

export class InitializationArticle {

  constructor(
    private fb: FormBuilder,
    private article?: Article
  ) {
    console.log("this article form ")
    console.log(this.article);
  }

  initForm() {
    return this.fb.group({
      asset_details: this.initAssetDetails(),
      asset_numbers: this.initAssetNumbers(),
      date_info: this.initDateInfo(),
    });
  }

  initAssetDetails(): FormGroup {
    console.log(this.article)
    return this.fb.group({
      firma: [this.article ? this.article.firma : ''],
      artikelname: [this.article ? this.article.artikelname : '', Validators.required],
      model: [this.article ? this.article.model : ''],
      zustand: [this.article ? this.article.zustand : ''],
      beschreibung: [this.article ? this.article.beschreibung : ''],
    });
  }
initAssetNumbers(): FormGroup {
  return this.fb.group({
    menge: [1 , Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      this.positiveNonZero // Make sure you have defined this custom validator function
    ])],
    preis: [this.article ? this.article.preis : ''],
    anlagenummer: [this.article ? this.article.anlagenummer : ''],
    serriennummer: [this.article ? this.article.seriennummer : ''],
  });
}


initDateInfo(): FormGroup {
  return this.fb.group({
    einkaufs_datum: [this.article && this.article.einkaufs_datum ? new Date(this.article.einkaufs_datum) : new Date()],
    edit_date: [this.article && this.article.edit_date ? new Date(this.article.edit_date) : new Date()],
    belegt_von: [this.article && this.article.belegt_von ? new Date(this.article.belegt_von) : new Date()],
    belegt_bis: [this.article && this.article.belegt_bis ? new Date(this.article.belegt_bis) : new Date()],
  });
}
  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return {nonPositiveOrZero: true};
    }
    return null;
  }

}
