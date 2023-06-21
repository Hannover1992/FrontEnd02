import { Component } from '@angular/core';
import {AssetInputDetails} from "../../../../../Inputs/Article/Specialization/asset/asset-compose/assetInputDetails/assetInputDetails";
import {MatDialog} from "@angular/material/dialog";
import {
  AssetComposeComponent
} from "../../../../../Inputs/Article/Specialization/asset/asset-compose/asset-compose.component";

@Component({
  selector: 'app-button-buch-asset-auf-asset-project',
  templateUrl: './button-buch-asset-auf-asset-project.component.html',
  styleUrls: ['./button-buch-asset-auf-asset-project.component.css']
})
export class ButtonBuchAssetAufAssetProjectComponent {

  constructor(private dialog: MatDialog){
  }

  open_input_form() {
    const dialogRef = this.dialog.open(AssetComposeComponent, {
      data: {
        mode: 'create' // Replace 'your_mode_here' with the mode you want to set.
      }
    });
  }

}
