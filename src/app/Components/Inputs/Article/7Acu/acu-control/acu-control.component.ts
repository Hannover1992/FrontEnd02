import { Component } from '@angular/core';
import {AcuTableService} from "../../../../../Services/Article/specialization/acu-table.service";
import {AcuUpdateElementService} from "../service/acuUpdateElement.service";
import {AcuProjectDataService} from "../service/acu-project-data.service";

@Component({
  selector: 'app-acu-control',
  templateUrl: './acu-control.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class AcuControlComponent {
  constructor(
    private acuTableService: AcuTableService,
    private updateElementService: AcuUpdateElementService,
    private projectArticleData: AcuProjectDataService
  ) {}

  onSubmit() {
    if (this.updateElementService.isActivated()) {
      this.acuTableService.update(this.projectArticleData.formatToProjectAcuUpdate());
      this.updateElementService.deactivate();
    } else {
      this.acuTableService.create(this.projectArticleData.formatToProjectAcuCreate());
    }
  }
}
