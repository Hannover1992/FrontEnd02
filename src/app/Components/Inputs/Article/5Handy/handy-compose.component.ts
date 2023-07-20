import { Component } from '@angular/core';
import {HandyUpdateElementService} from "./service/handy-update-element-service.service";

@Component({
  selector: 'app-handy-compose',
  template: `
    <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
    <app-menge></app-menge>
    <app-handy-input></app-handy-input>
  `,
  styleUrls: ['../../../../shared_css/input.css']
})
  export class HandyComposeComponent {
  updateElementService: HandyUpdateElementService;

  constructor(
    updateElementService: HandyUpdateElementService
  ) {
    this.updateElementService = updateElementService;
  }
}
