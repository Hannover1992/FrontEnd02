import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['../project-input-form.component.css'],
})
export class ProjectDetailsComponent {
  @Input() project_details: FormGroup;
  constructor( private fb: FormBuilder) {
    this.project_details = this.fb.group({ })
  }

  ngOnInit() {
  }


}
