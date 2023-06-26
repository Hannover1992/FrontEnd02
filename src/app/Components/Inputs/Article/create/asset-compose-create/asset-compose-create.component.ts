import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleFormDataService} from "../article/service/article-form-data.service";
import {Subscription} from "rxjs";
import {Article} from "../../../../Interface/article";
import {AssetFormDataService} from "../asset/service/asset-form-data.service";
import {Asset} from "../../../../Interface/asset";

@Component({
  selector: 'app-asset-compose-create',
  templateUrl: './asset-compose-create.component.html',
  styleUrls: ['./asset-compose-create.component.css']
})
export class AssetComposeCreateComponent implements OnDestroy, OnInit{
  article!: Article;
  private articleSubscribtion!: Subscription;

  asset: any;
  private assetSubscribtion!: Subscription;

  constructor(
    private articleData: ArticleFormDataService,
    private assetData:   AssetFormDataService
  ) {

  }

  ngOnInit(): void {
    this.articleSubscribtion = this.articleData.getFormData().subscribe(data => {
      this.article = this.formatFormToArticle(data);
      console.log(this.article);
    });

    this.assetSubscribtion = this.assetData.getFormData().subscribe(data => {
      this.asset = this.formatFormToAsset(data)
      console.log(this.asset);
    });

  }

  ngOnDestroy(): void {
    this.articleSubscribtion.unsubscribe();
    this.assetSubscribtion.unsubscribe();
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
      // Add other properties as needed
    };

    return article;
  }

  private formatFormToAsset(data: any): Asset {
    console.log(data);
    let asset: Asset = {
      ID: data?.ID,
      Inventarnummer: data?.Inventarnummer
    }

    return asset;

  }
}
