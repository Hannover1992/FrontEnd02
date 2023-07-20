import {Component, Inject} from '@angular/core';
import {NotebookTableService} from "../../../../../../Services/Article/specialization/notebook-table.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-delete-notebook',
  templateUrl: './dialog-delete-notebook.component.html',
  styleUrls: ['./dialog-delete-notebook.component.css']
})
export class DialogDeleteNotebookComponent {

  notebook!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notebookTableService: NotebookTableService)
  {
    this.notebook = data;
  }

  delete(){
    this.notebookTableService.delete(this.notebook);
  }
}
