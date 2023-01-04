import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-project-datum-detail',
  templateUrl: './project-datum-detail.component.html',
  styleUrls: ['./project-datum-detail.component.css']
})
export class ProjectDatumDetailComponent {
  @Input() Auftragsdatum  :Date;
  @Input() Startdatum     :Date;
  @Input() Endtermin      :Date;
  constructor() {
    this.Auftragsdatum = new Date(1992);
    this.Startdatum = new Date(1992);
    this.Endtermin = new Date(1992);
  }
}
