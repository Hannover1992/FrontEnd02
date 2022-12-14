import { Component } from '@angular/core';
import {ProjectInterface} from "../../project.interface";
import {Project} from "../../project";

@Component({
  selector: 'app-dialog-create-new-project',
  templateUrl: './dialog-create-new-project.component.html',
  styleUrls: ['./dialog-create-new-project.component.css']
})
export class DialogCreateNewProjectComponent {

  project_local = new Project();
  constructor() { }


}
