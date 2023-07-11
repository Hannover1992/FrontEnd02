import { Component } from '@angular/core';
import {
  AssetComposeCreateComponent
} from "../../../../../Inputs/Article/2Asset/asset-compose-create.component";
import {MatDialog} from "@angular/material/dialog";
import {
  AssetUpdateElementService
} from "../../../../../Inputs/Article/2Asset/service/AssetUpdateElementService";
import {
  SimkartenComposeCreateComponent
} from "../../../../../Inputs/Article/3Simkarte/simkarten-compose-create.component";

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
