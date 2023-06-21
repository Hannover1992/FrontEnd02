import {Component, Inject, Input} from '@angular/core';
import {CurrentArticleAsset} from "./services/current-article-asset.service";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {FormRetrievalService} from "./services/old/form-retrieval.service";
import {FormGroup} from "@angular/forms";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {Article} from "../../../../../Interface/article";
import {ProjectAssetArticle} from "./services/project-asset-article";
import {AssetTableService} from "../../../../../Services/asset-table.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-asset-compose',
  templateUrl: './asset-compose.component.html',
  styleUrls: ['./asset-compose.component.css']
})
export class AssetComposeComponent {
  element!: ProjectArticle;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private projectAssetArticle:ProjectAssetArticle
              ) {

    if(this.data == undefined){
      console.log("undefined!!!!!!!!")
    } else {
      this.element = this.data.element;
      projectAssetArticle.projectAssetArticle.next(this.element);
    }
  }
}
