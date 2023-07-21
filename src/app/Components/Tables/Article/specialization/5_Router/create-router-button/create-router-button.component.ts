import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RouterUpdateElementService} from "../../../../../Inputs/Article/6Router/service/router-update-element.service";
import {RouterComposeComponent} from "../../../../../Inputs/Article/6Router/router-compose/router-compose.component";

@Component({
  selector: 'app-create-router-button',
  templateUrl: './create-router-button.component.html',
  styleUrls: ['./create-router-button.component.css']
})
export class CreateRouterButtonComponent {

  constructor(
    private dialog: MatDialog,
    private updateElementService: RouterUpdateElementService
  ) {}

  open_input_form(): void {
    this.updateElementService.deactivate();
    this.dialog.open(RouterComposeComponent)
  }

}
