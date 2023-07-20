import { Component } from '@angular/core';
import {HandyTableService} from "../../../../../Services/Article/specialization/handy-table.service";
import {HandyUpdateElementService} from "../service/handy-update-element-service.service";
import {HandyProjectDataService} from "../service/handy-project-data.service";

@Component({
  selector: 'app-handy-input-control',
  templateUrl: './handy-input-control.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class HandyInputControlComponent {
  constructor(
    private handyTableService: HandyTableService,
    private updateElementService: HandyUpdateElementService,
    private projectArticleData: HandyProjectDataService
  ) {}

  onSubmit() {
    if(this.updateElementService.isActivated()){
      this.handyTableService.update(this.projectArticleData.formatToProjectHandyUpdate());
      this.updateElementService.deactivate();
    } else {
      this.handyTableService.create(this.projectArticleData.formatToProjectHandyCreate());
    }
  }
}
