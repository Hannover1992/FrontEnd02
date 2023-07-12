import { Component } from '@angular/core';
import {ProjectAssetDataService} from "../service/project-asset-data.service";
import {AssetTableService} from "../../../../../Services/Article/specialization/asset-table.service";
import {AssetUpdateElementService} from "../service/AssetUpdateElementService";

@Component({
  selector: 'app-control',
  templateUrl: './control-asset.component.html',
  styleUrls: ['../../../../../shared_css/input.css'],
  providers: [ProjectAssetDataService]
})
export class ControlAsset {

  constructor(
    private projectArticleData:ProjectAssetDataService,
    private assetTableService:AssetTableService,
    private updateElementService: AssetUpdateElementService,
  ){
  }

  onSubmit() {
    if(this.updateElementService.isActivated()){
      this.assetTableService.update(this.projectArticleData.formatToProjectAssetUpdate());
      this.updateElementService.deactivate();
    } else {
      this.assetTableService.create(this.projectArticleData.formatToProjectAssetCreate());
    }
  }

}
