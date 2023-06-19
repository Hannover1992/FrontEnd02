import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";

@Component({
  selector: 'app-asset-input-buttons',
  templateUrl: './asset-input-buttons.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class AssetInputButtonsComponent {

    onSubmit() {

      // let projectArticle : ProjectArticle =  this.erweiterterAssetCreationService.create(this.assetForm, this.projectsService);
      // // console.log(projectArticle)
      // this.assetTableService.create_new_asset(projectArticle);
      // // this.dialog.closeAll();
  }
}
