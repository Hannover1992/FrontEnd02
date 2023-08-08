import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AssetComposeCreateComponent} from "../../../../../Inputs/Article/2Asset/asset-compose-create.component";
import {AssetUpdateElementService} from "../../../../../Inputs/Article/2Asset/service/AssetUpdateElementService";
import {getHeightConfig} from "../../config";

@Component({
  selector: 'app-create-new-asset',
  templateUrl: './button-buch-asset-auf-asset-project.component.html',
})
export class ButtonBuchAssetAufAssetProjectComponent {

  constructor(
      private dialog: MatDialog,
      private updateElementService: AssetUpdateElementService
  ){
  }

  open_input_form() {
    // this.dialog.open(AssetComposeComponent);
    this.updateElementService.deactivate();
    let config = getHeightConfig();
    this.dialog.open(AssetComposeCreateComponent,config)
  }

}
