import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  DialogCreateNewProjectComponent
} from "./dialog-create-new-project/dialog-create-new-project.component";

@Component({
  selector: 'app-button-input-project',
  templateUrl: './button-input-project.component.html',
  styleUrls: ['./button-input-project.component.css']
})

export class ButtonInputProjectComponent {

constructor(private dialog: MatDialog) { }

  open_input_form(){

    //open dialog
    this.dialog.open(DialogCreateNewProjectComponent);
  }


}
