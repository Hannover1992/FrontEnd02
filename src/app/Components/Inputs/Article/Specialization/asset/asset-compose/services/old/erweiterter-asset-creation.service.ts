import { Injectable } from '@angular/core';
import {ArticleCreationService} from "../../../../../Base/service/article-creation.service";
import {UnterKategorieService} from "../../../../../../../Services/unter-kategorie.service";
import {Util} from "./util.service";
import {FormGroup} from "@angular/forms";
import {Article} from "../../../../../../../Interface/article";
import {ErweiterterAssetRetrivalService} from "./erweiterter-asset-retrival.service";
import {Asset} from "../../../../../../../Interface/asset";
import {FormRetrievalService} from "./form-retrieval.service";

@Injectable({
  providedIn: 'root'
})
export class ErweiterterAssetCreationService extends ArticleCreationService implements  ArticleCreationService {

  constructor(
    unterKategorieService: UnterKategorieService,
    util: Util,
    formRetrievalService: FormRetrievalService,
    private erweitertRetrivalAssetService: ErweiterterAssetRetrivalService,
  ) { super ( unterKategorieService,  formRetrievalService ) }


  erweitere_es_um_electronics(artikelForm: FormGroup, newArticle: Article) : Article {
    let currentAsset = this.createNewAsset(artikelForm);
    newArticle.assets = currentAsset;

    return newArticle;
  }

  private createNewAsset(artikelForm: FormGroup<any>): Asset {

    let inventarnummer: number = this.erweitertRetrivalAssetService.inventarnummerForm(artikelForm);

    let currentAsset: Asset = {
      Inventarnummer :   inventarnummer
    };
    return currentAsset;
  }
}
