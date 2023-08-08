import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import {ProjectInputFormComponent} from "./dialog-create-new-project/project-input-form/project-input-form.component";
import {getHeightConfig} from "../../../Tables/Article/specialization/config";

@Component({
  selector: 'app-button-input-project',
  templateUrl: './button-input-project.component.html',
  styleUrls: ['../../../../shared_css/input.css'],
  exportAs: 'buttonInputProject'
})


export class ButtonInputProjectComponent {


  // dialogRef!: MatDialogRef<ProjectInputFormComponent>;

  constructor(private dialog: MatDialog) {}

  open_input_form(){

    //open dialog
    let config = getHeightConfig();
    this.dialog.open(ProjectInputFormComponent, config);
  }


}
