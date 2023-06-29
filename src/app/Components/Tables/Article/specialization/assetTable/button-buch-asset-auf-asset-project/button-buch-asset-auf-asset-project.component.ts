import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  AssetComposeCreateComponent
} from "../../../../../Inputs/Article/upsert/asset-compose-create/asset-compose-create.component";
import {
  AssetUpdateElementService
} from "../../../../../Inputs/Article/upsert/asset-compose-create/service/updateService/update-element-service-base.service";

@Component({
  selector: 'app-create-new-asset',
  templateUrl: './button-buch-asset-auf-asset-project.component.html',
  styleUrls: ['./button-buch-asset-auf-asset-project.component.css']
})
export class ButtonBuchAssetAufAssetProjectComponent {

  constructor(private dialog: MatDialog,
              private updateElementService: AssetUpdateElementService){
  }

  open_input_form() {
    // this.dialog.open(AssetComposeComponent);
    this.updateElementService.deactivate();
    this.dialog.open(AssetComposeCreateComponent);
  }

}
