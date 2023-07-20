import { Component } from '@angular/core';
import {NotebookUpdateElementService} from "./service/notebook-update-element.service";



@Component({
  selector: 'app-notebook-compose',
  template: `
    <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
    <app-menge></app-menge>
    <app-notebook-input></app-notebook-input>
<!--        toDo: notebo contorl-->
<!--    <app-simkarten-control></app-simkarten-control>-->
  `,
  styleUrls: ['../../../../shared_css/input.css']
})
export class NotebookComposeComponent {
  updateElementService: NotebookUpdateElementService;

  constructor(
    updateElementService: NotebookUpdateElementService
  ) {
    this.updateElementService = updateElementService;
  }
}
