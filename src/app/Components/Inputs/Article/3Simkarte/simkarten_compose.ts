import { Component } from '@angular/core';
import {SimkartenUpdateElementService} from "./service/SimkartenUpdateElementService";

@Component({
  selector: 'app-simkarten-compose-create',
  template: `
    <div class="input_container">
      <app-article-input-compose *ngIf="updateElementService" [updateElementService]="updateElementService"></app-article-input-compose>
      <app-menge></app-menge>
      <app-simkarte></app-simkarte>
      <app-simkarten-control></app-simkarten-control>
    </div>
  `,
  styleUrls: ['../../../../shared_css/input.css']
})
export class Simkarten_compose {
  public updateElementService: SimkartenUpdateElementService;

  constructor(
    updateElementService:SimkartenUpdateElementService
  ) {

    this.updateElementService = updateElementService;
  }

}
