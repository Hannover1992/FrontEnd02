import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../../../Interface/article";
import {ArticleFormDataService} from "./service/article-form-data.service";

@Component({
  selector: 'app-article-input-compose',
  templateUrl: './article-input-compose.component.html',
  styleUrls: ['./article-input-compose.component.css']
})


export class ArticleInputComposeComponent implements OnInit{
  artikelForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleFormDataService : ArticleFormDataService,
  ) {
  }

  ngOnInit(): void {
    this.artikelForm = new InitializationArticle(this.fb).initForm();
    this.articleFormDataService.setForm(this.artikelForm);
  }

  get articleDetails(): FormGroup {
    return this.artikelForm.get('asset_details') as FormGroup;
  }

  get articleDates(): FormGroup {
    return this.artikelForm.get('date_info') as FormGroup;
  }

  get articleNumbers(): FormGroup {
    return this.artikelForm.get('asset_numbers') as FormGroup;
  }



}



export class InitializationArticle {

  constructor(
    private fb: FormBuilder,
  ) { }

  initForm() {
    return this.fb.group({
      asset_details: this.initAssetDetails(),
      asset_numbers: this.initAssetNumbers(),
      date_info: this.initDateInfo(),
    });
  }

  initAssetDetails(): FormGroup {
    return this.fb.group({
      firma: '',
      artikelname: ['', Validators.required],
      model:  '',
      zustand:  '',
      beschreibung:  '',
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
      Inventarnummer: [0],
      anlagenummer: [''],
      serriennummer: [''],
    });
  }



  initDateInfo(): FormGroup {
    return this.fb.group({
      einkaufs_datum: [new Date()],
      edit_date: [new Date()],
      belegt_von: [new Date()],
      belegt_bis: [new Date()],
    });
  }

  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return {nonPositiveOrZero: true};
    }
    return null;
  }

}
