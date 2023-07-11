import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Article} from "../../../../../../Interface/article";
import {Subscription} from "rxjs";
import {ArticleFormDataService} from "./article-form-data.service";
import {UnterKategorieService} from "../../../../../../Services/unter-kategorie.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  article!: Article;
  private articleSubscribtion!: Subscription;

  constructor(
    private articleData: ArticleFormDataService,
    private unterKategorieService: UnterKategorieService,
  ) {
    this.subscribeArticleForm();
  }

  private subscribeArticleForm() {
    this.articleSubscribtion = this.articleData.getFormData().subscribe(data => {
      this.setArticle(data);
    });
  }


  private setArticle(data: any) {
    this.article = this.formatFormToArticle(data);
    this.setSubCategoryID();
  }

  private formatFormToArticle(data: any): Article {

    let article: Article = {
      artikelname: data?.asset_details?.artikelname,
      firma: data?.asset_details?.firma,
      model: data?.asset_details?.model,
      zustand: data?.asset_details?.zustand,
      preis: data?.asset_numbers?.preis,
      einkaufs_datum: data?.date_info?.einkaufs_datum,
      belegt_von: data?.date_info?.belegt_von,
      belegt_bis: data?.date_info?.belegt_bis,
      edit_date: data?.date_info?.edit_date,
      seriennummer: data?.asset_numbers?.seriennummer,
      anlagenummer: data?.asset_numbers?.anlagenummer,
      beschreibung: data?.asset_details?.beschreibung,
      // Add other proseriennummerperties as needed
    };



    return article;
  }

  private setSubCategoryID() {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    this.article =  {...this.article, unterkategorie_id: unterkategorieID};
  }
}
