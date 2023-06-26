import {Component, Inject, Input, OnInit} from '@angular/core';
import {CurrentArticleAsset} from "./services/current-article-asset.service";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {FormRetrievalService} from "./services/old/form-retrieval.service";
import {FormGroup} from "@angular/forms";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {Article} from "../../../../../Interface/article";
import {ProjectAssetArticle} from "./services/project-asset-article";
import {AssetTableService} from "../../../../../Services/asset-table.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ArticleUpdateServiceService} from "../../../Base/service/article-update-service.service";

@Component({
  selector: 'app-asset-compose',
  templateUrl: './asset-compose.component.html',
  styleUrls: ['./asset-compose.component.css']
})
export class AssetComposeComponent implements OnInit {
  element!: ProjectArticle;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private projectAssetArticle:ProjectAssetArticle,
    private articleUpdateServiceService :ArticleUpdateServiceService
              ) {
  }

  ngOnInit(): void {
    if(this.data == undefined){
    } else {
      this.element = this.data.element;
      let projectArticle = this.convertTemplate(this.element);
      this.articleUpdateServiceService.currentProjectArticleForUpdate.next(projectArticle)
    }
  }


  convertTemplate(tableObject: any): any {
    console.log("das habe ich aus der Table erhalten ")
    console.log(tableObject)
    let projectArticle : ProjectArticle = {
      "projekt_artikel_id": tableObject.projekt_artikel_id,
      "projekt_id": tableObject.projekt_id,
      "artikel_id": tableObject.artikel_id,
      "menge": tableObject.menge,
      "artikel": {
        "firma": tableObject.firma,
        "artikelname": tableObject.artikelname,
        "model": tableObject.model,
        "zustand": tableObject.zustand,
        "beschreibung": tableObject.beschreibung,
        "preis": tableObject.preis,
        "anlagenummer": tableObject.anlagenummer,
        "seriennummer": tableObject.seriennummer,
        "einkaufs_datum": tableObject.einkaufs_datum,
        "edit_date": tableObject.edit_date,
        "belegt_von": tableObject.belegt_von,
        "belegt_bis": tableObject.belegt_bis,
        "assets": {
          "ID": tableObject.asset_id,
          "Inventarnummer": tableObject.Inventarnummer,
        },
        "unterkategorie_id": tableObject.unterkategorie_id
      }
    }
    console.log("das ist der projectArticle")
    console.log(projectArticle)
    return projectArticle;
  }

}
