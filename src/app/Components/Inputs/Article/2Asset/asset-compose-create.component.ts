import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleDataService} from "../1Base/article/service/articleData.service";
import {AssetDataService} from "./service/assetData.service";
import {MengeDataService} from "../1Base/menge/service/mengeData.service";

@Component({
  selector: 'app-asset-compose-create',
  templateUrl: './asset-compose-create.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})
export class AssetComposeCreateComponent {
  constructor( ) { }
}
