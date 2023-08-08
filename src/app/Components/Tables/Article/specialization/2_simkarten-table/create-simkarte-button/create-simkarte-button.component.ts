import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Simkarten_compose } from "../../../../../Inputs/Article/3Simkarte/simkarten_compose";
import { SimkartenUpdateElementService } from "../../../../../Inputs/Article/3Simkarte/service/SimkartenUpdateElementService";
import {getHeightConfig} from "../../config";

@Component({
  selector: 'app-create-simkarte-button',
  templateUrl: './create-simkarte-button.component.html',
  styleUrls: ['../../../../../../shared_css/input.css'],
})
export class CreateSimkarteButtonComponent {

  constructor(
    private dialog: MatDialog,
    private updateElementService: SimkartenUpdateElementService
  ) {
  }

  open_input_form() {
    // this.dialog.open(AssetComposeComponent);
    this.updateElementService.deactivate();
    let config = getHeightConfig();
    this.dialog.open(Simkarten_compose, config);
  }

}
