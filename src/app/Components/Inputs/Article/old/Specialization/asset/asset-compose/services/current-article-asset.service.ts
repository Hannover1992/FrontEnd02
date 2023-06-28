import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../../../../../Interface/article";
import {Asset} from "../../../../../../../../Interface/asset";
import {ArticleData} from "../../../../Base/service/article-data.service";
import {AssetData} from "./asset/asset-data.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CurrentArticleAsset {

  umAssetErweiterterArticle: BehaviorSubject<Article>  = new BehaviorSubject<Article>({});

  private currentArticle: Article = {};
  private currentAsset: Asset = {};

  constructor(
    private articleData:ArticleData,
    private assetInputDataService : AssetData,
  ) {

    this.articleData.article.subscribe((articleData) => {
      this.currentArticle = articleData;
      this.updateErweiterterAssetArticle();
    });

    this.assetInputDataService.assetData.subscribe((assetData) => {
      this.currentAsset = assetData;
      this.updateErweiterterAssetArticle();
    });

  }

  public restart(){
    this.umAssetErweiterterArticle.next({});
    this.currentArticle = {};
    this.currentAsset = {};
    this.assetInputDataService.restart();
  }

  private updateErweiterterAssetArticle() {
    let articleTemp : Article = this.articleData.article.getValue();
    articleTemp.assets = this.currentAsset;
    this.umAssetErweiterterArticle.next(articleTemp);
  }

  rekursivSetzen(artikel: Article) {
    console.log("diese Article mochte ich recursive setzen")
    console.log(artikel);
    this.umAssetErweiterterArticle.next(artikel);
    this.currentArticle = artikel;


    this.assetInputDataService.rekursiveSetzen(artikel.assets);
  }
}
