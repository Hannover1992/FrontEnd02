import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup } from "@angular/forms";
import {ProjectService} from "../../../../service/project.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['../../../../../../shared_css/input.css'],
})
export class ProjectDetailsComponent {
  @Input() project_details: FormGroup;
  @Input() primary_error_message : boolean;
  // create an input field, for if ... should be displayed, by daful it is not displayed
  @Input() read_only_id: boolean = false;

  constructor( private fb: FormBuilder, projectService: ProjectService) {
    this.project_details = this.fb.group({ })
    this.primary_error_message = true;
    projectService.projects_error_subject.subscribe(
      (error) => {
        this.primary_error_message = error;
      });
  }

  ngOnInit() {
  }

}
