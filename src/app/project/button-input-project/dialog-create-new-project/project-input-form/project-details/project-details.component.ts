import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../../service/project.service";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['../project-input-form.component.css'],
})
export class ProjectDetailsComponent {
  @Input() project_details: FormGroup;
  @Input() primary_error_message : boolean;

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
