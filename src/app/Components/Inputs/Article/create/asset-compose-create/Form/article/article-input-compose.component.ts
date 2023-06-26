import {Component, Input, OnInit} from '@angular/core';
import {ArticleFormDataService} from "./service/article-form-data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-article-input-compose',
  templateUrl: './article-input-compose.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
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
      firma: '',
      artikelname: ['', Validators.required],
      model:  '',
      zustand:  '',
      beschreibung:  '',
    });
  }

  initAssetNumbers(): FormGroup {
    return this.fb.group({
      preis: 0,
      anlagenummer: [''],
      seriennummer: [''],
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


}
