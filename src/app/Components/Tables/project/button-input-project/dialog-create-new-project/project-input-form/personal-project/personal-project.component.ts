import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.component.html',
  styleUrls: ['../project-input-form.component.css' ]
})
export class PersonalProjectComponent {
  @Input() personal: FormGroup;
  constructor( private fb: FormBuilder) {
    this.personal = this.fb.group({ })
  }
}
