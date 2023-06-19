import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../../../Interface/article";
import {Asset} from "../../../../../../Interface/asset";
import {ArtikelFormDataService} from "../../../../Base/service/artikel-form-data.service";
import {AssetInputDataService} from "./assetProject/asset-input-data.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CurrentArticleAsset {

  erweiterterAssetArticle: BehaviorSubject<Article>  = new BehaviorSubject<Article>({});

  private currentArticle: Article = {};
  private currentAsset: Asset = {};

  constructor(
    private artikelFormDataService:ArtikelFormDataService,
    private assetInputDataService : AssetInputDataService,
  ) {
    this.artikelFormDataService.article.subscribe((articleData) => {
      this.currentArticle = articleData;
      this.updateErweiterterAssetArticle();
    });
    this.assetInputDataService.assetInputFormData.subscribe((assetData) => {
      this.currentAsset = assetData;
      this.updateErweiterterAssetArticle();
    });
  }

  private updateErweiterterAssetArticle() {
    // const mergedData = { ...this.currentArticle, assets: this.currentAsset };
    let articleTemp : Article = this.currentArticle;
    articleTemp.assets = this.currentAsset;
    this.erweiterterAssetArticle.next(articleTemp);
  }

  currentArticleValue():any {
      this.erweiterterAssetArticle.getValue();
  }
}
