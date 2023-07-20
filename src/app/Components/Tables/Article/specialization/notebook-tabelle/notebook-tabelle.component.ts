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

@Component({
  selector: 'app-notebook-tabelle',
  templateUrl: './notebook-tabelle.component.html',
  styleUrls: ['./notebook-tabelle.component.css'],
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
    public TableService: NotebookTableService,
    //toDo: NotebookUpdateElementService,

    // private updateElementService: SimkartenUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
  ){
    super(_liveAnnouncer, dialog );
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource(TableService.data.getValue());
    console.log(TableService.data.getValue())
    this.read();
  }

  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.notebook }
    delete flattenedData.notebook;
    return flattenedData;
  }

  protected open_the_dialog_for_deleting_artikel(element: ProjectArticle): void {
    this.dialog.open(DialogDeleteNotebookComponent, {
      data: element
    })
  }

  protected open_the_dialog_for_updating_artikel(element: any): void {
    //toDo: open dialog update
  }

  protected read(): void {
    //toDo: read
  }


}
