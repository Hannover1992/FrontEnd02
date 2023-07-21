import { Component } from '@angular/core';
import {RouterUpdateElementService} from "../service/router-update-element.service";

@Component({
  selector: 'app-router-compose',
  template: `
    <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
    <app-menge></app-menge>
  `,
  styleUrls: ['./router-compose.component.css'],
})
export class RouterComposeComponent {
  updateElementService: RouterUpdateElementService;

  constructor(
    updateElementService: RouterUpdateElementService
  ) {
    this.updateElementService = updateElementService
  }
}
