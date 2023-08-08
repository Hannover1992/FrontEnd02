import { Component } from '@angular/core';
import {AcuUpdateElementService} from "../../../../../Inputs/Article/7Acu/service/acuUpdateElement.service";
import {AcuComposeComponent} from "../../../../../Inputs/Article/7Acu/acu-compose.component";
import {MatDialog} from "@angular/material/dialog";
import {getHeightConfig} from "../../config";

@Component({
  selector: 'app-create-acu-button',
  templateUrl: './create-acu-button.component.html',
  styleUrls: ['./create-acu-button.component.css']
})
export class CreateAcuButtonComponent {

  constructor(
    private dialog: MatDialog,
    private updateElementService: AcuUpdateElementService
  ) {}

  open_input_form(){
    this.updateElementService.deactivate();
    let config = getHeightConfig();
    this.dialog.open(AcuComposeComponent, config)
  }

}
