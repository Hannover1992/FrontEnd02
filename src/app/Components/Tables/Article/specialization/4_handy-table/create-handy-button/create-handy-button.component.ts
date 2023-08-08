import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { HandyUpdateElementService } from "../../../../../Inputs/Article/5Handy/service/handy-update-element-service.service";
import {HandyComposeComponent} from "../../../../../Inputs/Article/5Handy/handy-compose.component";
import {getHeightConfig} from "../../config";

@Component({
  selector: 'app-create-handy-button',
  templateUrl: './create-handy-button.component.html',
  styleUrls: ['./create-handy-button.component.css']
})
export class CreateHandyButtonComponent {

  constructor(
    private dialog: MatDialog,
    private updateElementService: HandyUpdateElementService // Use HandyUpdateElementService here
  ) {
  }

  open_input_form() {
    this.updateElementService.deactivate();
    let config = getHeightConfig();
    this.dialog.open(HandyComposeComponent, config); // Use HandyComposeComponent here
  }

}
