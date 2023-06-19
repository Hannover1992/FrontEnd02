import { Component } from '@angular/core';
import {CurrentArticleAsset} from "./services/current-article-asset.service";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {FormRetrievalService} from "./services/old/form-retrieval.service";
import {FormGroup} from "@angular/forms";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {Article} from "../../../../../Interface/article";
import {ProjectAssetArticle} from "./services/project-asset-article";

@Component({
  selector: 'app-asset-compose',
  templateUrl: './asset-compose.component.html',
  styleUrls: ['./asset-compose.component.css']
})
export class AssetComposeComponent {



  constructor(
    private currentInputAssetService:CurrentArticleAsset,
    private unterKategorieService: UnterKategorieService,
    // private formRetrievalService: FormRetrievalService
    private projectAssetArticle:ProjectAssetArticle
  ) {
    // currentInputAssetService.erweiterterAssetArticle.subscribe(
      // (erweiterterAssetArticle) => {
      //   console.log(erweiterterAssetArticle)
      // });
  }


  private getUnterkategorieID(): number {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    if (!unterkategorieID) {
      throw new Error('unterkategorieID is null');
    }
    return unterkategorieID;
  }

  private getProjektID(projectsService: any): number {
    const proStr = projectsService.selectedProject.getValue();
    return parseInt(proStr);
  }


  create(artikelForm: FormGroup, projectsService: any): any {
    // const projektID : number  = this.getProjektID(projectsService);
    // const newArticle: Article = this.createNewArticle(artikelForm);

    // return {
    //   projekt_artikel_id: undefined,
    //   projekt_id:         projektID,
    //   artikel_id:         0,
    //   menge:              this.formRetrievalService.mengeForm(artikelForm),
    //   artikel:            newArticle,
    // };

    let projectArticls: { artikel: any; projekt_id: any } = {
      projekt_id: projectsService.selectedProject.getValue(),
      artikel: this.currentInputAssetService.currentArticleValue()
    }
    console.log(projectArticls)
  }



}
