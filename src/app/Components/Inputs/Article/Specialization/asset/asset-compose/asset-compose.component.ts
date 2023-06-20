import { Component } from '@angular/core';
import {CurrentArticleAsset} from "./services/current-article-asset.service";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {FormRetrievalService} from "./services/old/form-retrieval.service";
import {FormGroup} from "@angular/forms";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {Article} from "../../../../../Interface/article";
import {ProjectAssetArticle} from "./services/project-asset-article";
import {AssetTableService} from "../../../../../Services/asset-table.service";

@Component({
  selector: 'app-asset-compose',
  templateUrl: './asset-compose.component.html',
  styleUrls: ['./asset-compose.component.css']
})
export class AssetComposeComponent {



  constructor( ) {
  }
}
