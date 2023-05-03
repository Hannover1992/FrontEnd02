import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-filter-component',
  templateUrl: './project-filter-component.component.html',
  styleUrls: ['./project-filter-component.component.css']
})
export class ProjectFilterComponentComponent {
  @Output() applyFilter = new EventEmitter<Event>();
}
