import {Component, Inject} from '@angular/core';
import {
  ProjectInputFormComponent
} from "../button-input-project/dialog-create-new-project/project-input-form/project-input-form.component";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ProjectInterface} from "../project.interface";

@Component({
  selector: 'app-update-single-project',
  templateUrl: './update-single-project.component.html',
  styleUrls: ['./update-single-project.component.css']
})
export class UpdateSingleProjectComponent {

  project_to_update: ProjectInterface;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.project_to_update = data;
  }

}
