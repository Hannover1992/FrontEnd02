import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  NotebookUpdateElementService
} from "../../../../../Inputs/Article/4Notebook/service/notebook-update-element.service";
import {NotebookComposeComponent} from "../../../../../Inputs/Article/4Notebook/notebook-compose.component";

@Component({
  selector: 'app-create-notebook-button',
  templateUrl: './create-notebook-button.component.html',
  styleUrls: ['./create-notebook-button.component.css']
})
export class CreateNotebookButtonComponent {

  constructor(
    private dialog: MatDialog,
    private updateElementService: NotebookUpdateElementService
  ) {
  }

  open_input_form() {
      // this.dialog.open(AssetComposeComponent);
      this.updateElementService.deactivate();
      this.dialog.open(NotebookComposeComponent);
    }

}
