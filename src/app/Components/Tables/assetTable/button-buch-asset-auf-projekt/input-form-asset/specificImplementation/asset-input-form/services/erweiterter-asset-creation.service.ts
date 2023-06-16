import { Injectable } from '@angular/core';
import {ArticleCreationService} from "../../../services/article-creation.service";
import {UnterKategorieService} from "../../../../../../../Services/unter-kategorie.service";
import {Util} from "../../../services/util.service";
import {FormRetrievalService} from "../../../services/form-retrieval.service";
import {FormGroup} from "@angular/forms";
import {Article} from "../../../../../Interface/article";
import {ErweiterterAssetRetrivalService} from "./erweiterter-asset-retrival.service";

@Injectable({
  providedIn: 'root'
})
export class ErweiterterAssetCreationService extends ArticleCreationService implements  ArticleCreationService {

  constructor(
    unterKategorieService: UnterKategorieService,
    util: Util,
    formRetrievalService: FormRetrievalService,
    private erweitertRetrivalAssetService: ErweiterterAssetRetrivalService,
  ) { super ( unterKategorieService, util, formRetrievalService ) }


  erweitere_es_um_electronics(artikelForm: FormGroup, nerArticle: Article) {

    let erweiterterArticle: Article = {
      ... nerArticle,
      ...{
        assets: {
          ID:                 0,
          Inventarnummer:   this.erweitertRetrivalAssetService.inventarnummerForm(artikelForm),
        }
      }
    }

    return erweiterterArticle;
  }

}
