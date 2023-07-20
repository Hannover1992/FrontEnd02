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

@Component({
  selector: 'app-notebook-tabelle',
  templateUrl: './notebook-tabelle.component.html',
  styleUrls: ['./notebook-tabelle.component.css']
})
export class NotebookTabelleComponent  extends TableComponentBase{

  constructor(
    public TableService: NotebookTableService,
    // private updateElementService: SimkartenUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
  ){
    super(_liveAnnouncer, dialog );
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource(TableService.data.getValue());
    this.read();
  }

  protected flattenExtend(flattenedData: any): any {
  }

  protected open_the_dialog_for_deleting_artikel(element: ProjectArticle): void {
  }

  protected open_the_dialog_for_updating_artikel(element: any): void {
  }

  protected read(): void {
  }


}
