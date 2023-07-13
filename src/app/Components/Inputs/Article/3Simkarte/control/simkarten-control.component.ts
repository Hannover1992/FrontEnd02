import { Component } from '@angular/core';
import {ProjectSimkarteDataServiceService} from "../service/project-simkarte-data-service.service";
import {SimkartenTableService} from "../../../../../Services/Article/specialization/simkarten-table.service";
import {SimkartenUpdateElementService} from "../service/SimkartenUpdateElementService";

@Component({
  selector: 'app-simkarten-control',
  templateUrl: './simkarten-control.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class SimkartenControlComponent {

  constructor(
    private projectArticleData: ProjectSimkarteDataServiceService,
    private simkartenTableService: SimkartenTableService,
    private updateElementService: SimkartenUpdateElementService,
  ){
  }

  onSubmit() {
    if(this.updateElementService.isActivated()){
      this.simkartenTableService.update(this.projectArticleData.formatToProjectSimkarteUpdate());
      this.updateElementService.deactivate();
    } else {
      this.simkartenTableService.create(this.projectArticleData.formatToProjectSimkarteCreate());
    }
  }
}
