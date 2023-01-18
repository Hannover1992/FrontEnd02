import { Component, Input , Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input() project_details: FormGroup;
  @Output() project_detailsChange = new EventEmitter<FormGroup>();
  constructor( private fb: FormBuilder) {
    this.project_details = this.fb.group({ })
  }

  ngOnInit() {
    this.project_details.valueChanges.subscribe(val => {
      this.project_detailsChanged();
    });
  }

  // //on every key press, emit the new value
  // onKey(event: any) {
  //   this.project_detailsChanged();
  // }

  project_detailsChanged() {
    console.log("project_detailsChanged");
    this.project_detailsChange.emit(this.project_details);
  }

}
