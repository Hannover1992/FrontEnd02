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
      console.log("this.element")
      console.log(this.element)
      this.articleUpdateServiceService.currentProjectArticleForUpdate.next(this.element)
    }
  }

}
