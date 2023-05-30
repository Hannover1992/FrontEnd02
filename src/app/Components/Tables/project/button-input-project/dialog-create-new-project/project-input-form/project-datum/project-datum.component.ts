import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-project-datum',
  templateUrl: './project-datum.component.html',
  styleUrls: ['../project-input-form.component.css', '../../../../../../../Components/Inputs/shared_css/input.css']
})



/* component specific styles here */
export class ProjectDatumComponent {
  @Input() datum: FormGroup;
  constructor( private fb: FormBuilder) {
    this.datum = this.fb.group({ })
  }
}

