import { Component, Input  } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-project-datum-detail',
  templateUrl: './project-datum-detail.component.html',
  styleUrls: ['./project-datum-detail.component.css']
})


export class ProjectDatumDetailComponent {
  @Input() Auftragsdatum  :Date;
  @Input() Startdatum     :Date;
  @Input() Endtermin      :Date;

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });

  constructor() {
    this.Auftragsdatum = new Date(2222);
    this.Startdatum = new Date(2222);
    this.Endtermin = new Date(2222);
  }}
