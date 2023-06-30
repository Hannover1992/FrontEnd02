import { Component } from '@angular/core';
import {
  AssetComposeCreateComponent
} from "../../../../../Inputs/Article/upsert/asset-compose-create/asset-compose-create.component";
import {MatDialog} from "@angular/material/dialog";
import {
  AssetUpdateElementService
} from "../../../../../Inputs/Article/upsert/asset-compose-create/service/updateService/specific/AssetUpdateElementService";
import {
  SimkartenComposeCreateComponent
} from "../../../../../Inputs/Article/upsert/simkarten-compose-create/simkarten-compose-create.component";

@Component({
  selector: 'app-create-simkarte-button',
  templateUrl: './create-simkarte-button.component.html',
})
export class CreateSimkarteButtonComponent {

  constructor(
    private dialog: MatDialog,
    private updateElementService: AssetUpdateElementService
  ) {
  }

  open_input_form() {
    // this.dialog.open(AssetComposeComponent);
    this.updateElementService.deactivate();
    this.dialog.open(SimkartenComposeCreateComponent);
  }

}
