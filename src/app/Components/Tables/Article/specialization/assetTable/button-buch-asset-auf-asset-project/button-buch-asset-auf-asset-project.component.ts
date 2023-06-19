import { Component } from '@angular/core';
import {AssetInputDetails} from "../../../../../Inputs/Article/Specialization/asset/assetInputDetails/assetInputDetails";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-button-buch-asset-auf-asset-project',
  templateUrl: './button-buch-asset-auf-asset-project.component.html',
  styleUrls: ['./button-buch-asset-auf-asset-project.component.css']
})
export class ButtonBuchAssetAufAssetProjectComponent {

  constructor(private dialog: MatDialog){
  }

  open_input_form() {
    this.dialog.open(AssetInputDetails);
  }

}
