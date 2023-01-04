import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-datum-detail',
  templateUrl: './project-datum-detail.component.html',
  styleUrls: ['./project-datum-detail.component.css']
})
export class ProjectDatumDetailComponent {
  selected: Date | null | undefined;
  //
  constructor() {
    this.selected = new Date();
  }
}
