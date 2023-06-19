import { Component } from '@angular/core';
import {AssetInputFormComponent} from "../../../../../Inputs/Article/Specialization/input-form-asset/specificImplementation/asset-input-form/asset-input-form.component";
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
    this.dialog.open(AssetInputFormComponent);
  }

}