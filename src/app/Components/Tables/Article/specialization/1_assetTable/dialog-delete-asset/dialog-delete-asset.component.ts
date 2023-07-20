import {Component, Inject} from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AssetTableService} from "../../../../../../Services/Article/specialization/asset-table.service";

@Component({
  selector: 'app-dialog-delete-asset',
  templateUrl: './dialog-delete-asset.component.html',
  styleUrls: ['./dialog-delete-asset.component.css']
})
export class DialogDeleteAssetComponent {
  asset_to_delet!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private assetTableService: AssetTableService
  ) {
    this.asset_to_delet = data;
    console.log(data);
  }

  delete(){
    this.assetTableService.delete(this.asset_to_delet);
  }

}
