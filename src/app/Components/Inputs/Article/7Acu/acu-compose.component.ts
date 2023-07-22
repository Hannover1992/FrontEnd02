import { Component } from '@angular/core';
import {AcuUpdateElementService} from "./service/acuUpdateElement.service";

@Component({
  selector: 'app-acu-compose',
  template: `
    <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
    <app-menge></app-menge>
    <app-acu-input></app-acu-input>
    <app-acu-control></app-acu-control>
  `,
  styleUrls: ['../../../../shared_css/input.css']
})
export class AcuComposeComponent {
  updateElementService: AcuUpdateElementService
  constructor(
    updateElementService: AcuUpdateElementService
  ) {
    this.updateElementService = updateElementService;
  }

}
