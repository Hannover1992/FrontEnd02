import { Component } from '@angular/core';
import {TableComponentBase} from "../../TableComponentBase";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {SimkartenTableService} from "../../../../../Services/Article/specialization/simkarten-table.service";
import {
  SimkartenUpdateElementService
} from "../../../../Inputs/Article/3Simkarte/service/SimkartenUpdateElementService";
import {MatDialog} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";
import {NotebookTableService} from "../../../../../Services/Article/specialization/notebook-table.service";
import {DialogDeleteNotebookComponent} from "./dialog-delete-notebook/dialog-delete-notebook.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {
  NotebookUpdateElementService
} from "../../../../Inputs/Article/4Notebook/service/notebook-update-element.service";
import {NotebookInputComponent} from "../../../../Inputs/Article/4Notebook/notebook-input.component";
import {NotebookComposeComponent} from "../../../../Inputs/Article/4Notebook/notebook-compose.component";

@Component({
  selector: 'app-notebook-tabelle',
  templateUrl: './notebook-tabelle.component.html',
  styleUrls: ['../table.css','../../../../../shared_css/table_details.css' ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotebookTabelleComponent  extends TableComponentBase{

  constructor(
    TableService: NotebookTableService,
    private updateElementService: NotebookUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
  ){
    super(_liveAnnouncer, dialog, TableService );
    this.read();
  }



  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.notebook }
    console.log(flattenedData);
    delete flattenedData.notebook;
    return flattenedData;
  }

  protected open_the_dialog_for_deleting_artikel(element: ProjectArticle): void {
    this.dialog.open(DialogDeleteNotebookComponent, {
      data: element
    })
  }

  protected open_the_dialog_for_updating_artikel(element: any): void {
    this.updateElementService.activate(element);
    this.dialog.open(NotebookComposeComponent)
  }



}
