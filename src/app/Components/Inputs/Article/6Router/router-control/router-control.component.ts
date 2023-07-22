import { Component } from '@angular/core';
import {RouterTableService} from "../../../../../Services/Article/specialization/router-table.service";
import {RouterUpdateElementService} from "../service/router-update-element.service";
import {RouterProjectDataService} from "../service/router-project-data.service";

@Component({
  selector: 'app-router-control',
  templateUrl: './router-control.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class RouterControlComponent {


  constructor(
    private routerTableService: RouterTableService,
    private updateElementService: RouterUpdateElementService,
    private projectArticleData: RouterProjectDataService
) {}

  onSubmit()
  {
    if (this.updateElementService.isActivated()) {
      this.routerTableService.update(this.projectArticleData.formatToProjectRouterUpdate());
      this.updateElementService.deactivate();
    } else {
      this.routerTableService.create(this.projectArticleData.formatToProjectRouterCreate());
    }
  }
}
