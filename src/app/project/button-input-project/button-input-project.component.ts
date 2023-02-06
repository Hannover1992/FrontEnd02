import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  DialogCreateNewProjectComponent
} from "./dialog-create-new-project/dialog-create-new-project.component";
import {ProjectInputFormComponent} from "./dialog-create-new-project/project-input-form/project-input-form.component";

@Component({
  selector: 'app-button-input-project',
  templateUrl: './button-input-project.component.html',
  styleUrls: ['./button-input-project.component.css'],
  exportAs: 'buttonInputProject'
})


export class ButtonInputProjectComponent {


  dialogRef!: MatDialogRef<ProjectInputFormComponent>;

  constructor(private dialog: MatDialog) {}

  open_input_form(){

    //open dialog
    this.dialogRef = this.dialog.open(ProjectInputFormComponent);
  }

  close_dialog() {
    //close the dialog
    this.dialogRef.close();
  }

}
