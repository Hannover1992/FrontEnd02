import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-auftrags-detail',
  templateUrl: './project-auftrags-detail.component.html',
  styleUrls: ['./project-auftrags-detail.component.css']
})
export class ProjectAuftragsDetailComponent {

  // 'Auftragsart',
  // 'Status',
  // 'Netto_Auftragswert',
  @Input() Auftragsart: string;
  @Input() Status: string;
  @Input() Netto_Auftragswert: string;

  constructor() {
    this.Auftragsart = "Nicht Initialisiert";
    this.Status = "Nicht Initialisiert";
    this.Netto_Auftragswert = "Nicht Initialisiert";
  }

}
