import { Component } from '@angular/core';
import {
  ProjectInputFormComponent
} from "../../project/button-input-project/dialog-create-new-project/project-input-form/project-input-form.component";
import {MatDialog} from "@angular/material/dialog";
import {InputArtikleForm} from "./input-form-asset/input-artikle-form.component";

@Component({
  selector: 'app-button-buch-asset-auf-projekt',
  templateUrl: './button-buch-asset-auf-projekt.component.html',
  styleUrls: ['./button-buch-asset-auf-projekt.component.css']
})
export class ButtonBuchAssetAufProjektComponent {

    constructor(private dialog: MatDialog) {

    }

        open_input_form() {
          this.dialog.open(InputArtikleForm);
  }
}
