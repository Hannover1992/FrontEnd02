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
  dateRange: Date[];

  constructor() {
    this.Auftragsdatum = new Date(2222);
    this.Startdatum = new Date(2222);
    this.Endtermin = new Date(2222);
    this.dateRange = [this.Startdatum, this.Endtermin];
  }}
