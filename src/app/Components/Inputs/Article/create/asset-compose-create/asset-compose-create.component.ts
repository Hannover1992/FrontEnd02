import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArticleDataService} from "./Data/articleData.service";
import {AssetDataService} from "./Data/assetData.service";
import {MengeDataService} from "./Data/mengeData.service";

@Component({
  selector: 'app-asset-compose-create',
  templateUrl: './asset-compose-create.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class AssetComposeCreateComponent implements OnDestroy, OnInit{


  constructor(
    articleDataService:ArticleDataService,
    // assetDataService:AssetDataService,
    // mengeDataService:MengeDataService
  ) {

  }



  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }





}
