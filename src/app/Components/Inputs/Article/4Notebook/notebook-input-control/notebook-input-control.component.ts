import { Component } from '@angular/core';
import {NotebookTableService} from "../../../../../Services/Article/specialization/notebook-table.service";
import {NotebookUpdateElementService} from "../service/notebook-update-element.service";
import {ProjectNotebookDataService} from "../service/project-notebook-data.service";

@Component({
  selector: 'app-notebook-input-control',
  templateUrl: './notebook-input-control.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class NotebookInputControlComponent {

  constructor(
    private notebookTableService: NotebookTableService,
    private updateElementService: NotebookUpdateElementService,
    private projectArticleData: ProjectNotebookDataService
  ){

  }

  onSubmit() {
    if(this.updateElementService.isActivated()){
      this.notebookTableService.update(this.projectArticleData.formatToProjectNotebookUpdate());
      this.updateElementService.deactivate();
    } else {
      this.notebookTableService.create(this.projectArticleData.formatToProjectNotebookCreate());
    }
  }
}
