import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {ProjectInputFormComponent} from "./dialog-create-new-project/project-input-form/project-input-form.component";

@Component({
  selector: 'app-button-input-project',
  templateUrl: './button-input-project.component.html',
  styleUrls: ['../../../Tables/shared_css/input.css'],
  exportAs: 'buttonInputProject'
})


export class ButtonInputProjectComponent {


  // dialogRef!: MatDialogRef<ProjectInputFormComponent>;

  constructor(private dialog: MatDialog) {}

  open_input_form(){

    //open dialog
    this.dialog.open(ProjectInputFormComponent);
  }


}
