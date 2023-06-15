import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { AssetInputFormComponent } from "./input-form-asset/specificImplementation/asset-input-form/asset-input-form.component";

@Component({
  selector: 'app-button-buch-asset-auf-projekt',
  templateUrl: './button-buch-asset-auf-projekt.component.html',
  styleUrls: ['./button-buch-asset-auf-projekt.component.css']
})
export class ButtonBuchAssetAufProjektComponent {

    constructor(private dialog: MatDialog) {

    }

  open_input_form() {
    this.dialog.open(AssetInputFormComponent);
  }
}
