import {Component, Input, OnInit} from '@angular/core';
import {ArticleFormDataService} from "./service/article-form-data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AssetUpdateElementService} from "../../2Asset/service/AssetUpdateElementService";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {Article} from "../../../../../Interface/article";
import {UpdateElementServiceBaseService} from "./service/update-element-service-base.service";

@Component({
  selector: 'app-article-input-compose',
  templateUrl: './article-input-compose.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})


export class ArticleInputComposeComponent implements OnInit{
  artikelForm!: FormGroup;
  @Input() updateElementService!: UpdateElementServiceBaseService;

  constructor(
    private fb: FormBuilder,
    private articleFormDataService : ArticleFormDataService,
    // private updateElementService: AssetUpdateElementService,
  ) {
    //on change
  }

  ngOnInit(): void {
    this.initializeArticleForm()

    this.artikelForm.valueChanges.subscribe(val => {
      console.log(val)
    });
  }

  initializeArticleForm() {
    let article: Article | undefined = undefined;

    if (this.updateElementService.isActivated()) {
      article = this.updateElementService.getArticle();
    }

    this.artikelForm = new InitializationArticle(this.fb).initForm(article);
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
  ) {}

  initForm( article?: Article) {
    return this.fb.group({
      asset_details: this.initAssetDetails(article),
      asset_numbers: this.initAssetNumbers(article),
      date_info: this.initDateInfo(article),
    });
  }

  initAssetDetails(article?: Article): FormGroup {
    return this.fb.group({
      firma: article ? article.firma : '',
      artikelname: [article ? article.artikelname : '', Validators.required],
      model:  article ? article.model : '',
      zustand:  article ? article.zustand : '',
      beschreibung:  article ? article.beschreibung : '',
    });
  }

  initAssetNumbers(article?: Article): FormGroup {
    return this.fb.group({
      preis: article ? article.preis : 0,
      anlagenummer: article ? article.anlagenummer : '',
      seriennummer: article ? article.seriennummer : '',
    });
  }

  initDateInfo(article? : Article): FormGroup {
    return this.fb.group({
      einkaufs_datum: article && article.einkaufs_datum ? new Date(article.einkaufs_datum) : new Date(),
      edit_date: article && article.edit_date ? new Date(article.edit_date) : new Date(),
      belegt_von: article && article.belegt_von ? new Date(article.belegt_von) : new Date(),
      belegt_bis: article && article.belegt_bis ? new Date(article.belegt_bis) : new Date(),
    });
  }


}
