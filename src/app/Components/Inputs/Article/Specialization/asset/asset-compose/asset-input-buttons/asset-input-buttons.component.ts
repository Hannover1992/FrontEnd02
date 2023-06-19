import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {ProjectAssetArticle} from "../services/project-asset-article";
import {UnterKategorieService} from "../../../../../../Services/unter-kategorie.service";

@Component({
  selector: 'app-asset-input-buttons',
  templateUrl: './asset-input-buttons.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class AssetInputButtonsComponent {

  constructor(

    private assetTableService: AssetTableService,

    private projectAssetArticle:ProjectAssetArticle,

    private unterKategorieService: UnterKategorieService,
  ) {
  }

    onSubmit() {
      let projectArticle : ProjectArticle = this.projectAssetArticle.projectAssetArticle.getValue();
      // @ts-ignore
      projectArticle.artikel.unterkategorie_id = this.getUnterkategorieID();
      console.log("dise unterkategorie ID habe ich:")
      console.log(this.unterKategorieService.selectedUnterKategorieId.value)
      this.assetTableService.create_new_asset(projectArticle);
  }


  private getUnterkategorieID(): number {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    if (!unterkategorieID) {
      throw new Error('unterkategorieID is null');
    }
    return unterkategorieID;
  }
}
