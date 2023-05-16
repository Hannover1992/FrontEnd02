import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-assets-detail',
  templateUrl: './project-assets-detail.component.html',
  styleUrls: ['./project-assets-detail.component.css']
})
export class ProjectAssetsDetailComponent {

  @Input()  firma: string;
  @Input()  model: string;
  @Input()  preis: string;
  @Input()  beschreibung: string;
  @Input()  zustand: string;

  constructor() {
    this.firma = "Nicht Initialisiert";
    this.model = "Nicht Initialisiert";
    this.preis = "Nicht Initialisiert";
    this.beschreibung = "Nicht Initialisiert";
    this.zustand = "Nicht Initialisiert";
  }
}
