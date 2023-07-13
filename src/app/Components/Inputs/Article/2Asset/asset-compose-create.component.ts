import {Component} from '@angular/core';
import {AssetUpdateElementService} from "./service/AssetUpdateElementService";

@Component({
  selector: 'app-asset-compose-create',
  template: `
    <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
      <app-menge></app-menge>
      <app-asset></app-asset>
      <app-control></app-control>
    `,
  styleUrls: ['../../../../shared_css/input.css']
})

export class AssetComposeCreateComponent {
  updateElementService: AssetUpdateElementService;

  constructor(updateElementService : AssetUpdateElementService) {
    this.updateElementService = updateElementService;
  }
}
