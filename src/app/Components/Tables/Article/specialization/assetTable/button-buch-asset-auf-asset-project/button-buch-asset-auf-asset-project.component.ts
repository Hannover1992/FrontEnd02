import { Component } from '@angular/core';
import {AssetInputDetails} from "../../../../../Inputs/Article/old/Specialization/asset/asset-compose/assetInputDetails/assetInputDetails";
import {MatDialog} from "@angular/material/dialog";
import {
  AssetComposeComponent
} from "../../../../../Inputs/Article/old/Specialization/asset/asset-compose/asset-compose.component";
import {
  AssetComposeCreateComponent
} from "../../../../../Inputs/Article/upsert/asset-compose-create/asset-compose-create.component";
import {
  UpdateElementService
} from "../../../../../Inputs/Article/upsert/asset-compose-create/service/update-element.service";

@Component({
  selector: 'app-button-buch-asset-auf-asset-project',
  templateUrl: './button-buch-asset-auf-asset-project.component.html',
  styleUrls: ['./button-buch-asset-auf-asset-project.component.css']
})
export class ButtonBuchAssetAufAssetProjectComponent {

  constructor(private dialog: MatDialog,
              private updateElementService: UpdateElementService){
  }

  open_input_form() {
    // this.dialog.open(AssetComposeComponent);
    this.updateElementService.deactivate();
    this.dialog.open(AssetComposeCreateComponent);
  }

}
