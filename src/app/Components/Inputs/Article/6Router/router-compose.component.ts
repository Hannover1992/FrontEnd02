import { Component } from '@angular/core';
import {RouterUpdateElementService} from "./service/router-update-element.service";

@Component({
  selector: 'app-router-compose',
  template: `
    <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
    <app-menge></app-menge>
    <app-router-input></app-router-input>
  `,
  styleUrls: ['../../../../shared_css/input.css'],
})
export class RouterComposeComponent {
  updateElementService: RouterUpdateElementService;

  constructor(
    updateElementService: RouterUpdateElementService
  ) {
    this.updateElementService = updateElementService
  }
}
