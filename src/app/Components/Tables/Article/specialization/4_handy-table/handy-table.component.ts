import { Component } from '@angular/core';
import {TableComponentBase} from "../../TableComponentBase";
import {HandyTableService} from "../../../../../Services/Article/specialization/handy-table.service";
import {
  HandyUpdateElementService
} from "../../../../Inputs/Article/5Handy/service/handy-update-element-service.service";
import {MatDialog} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {DialogDeleteHandyComponent} from "./dialog-delete-handy/dialog-delete-handy.component";
import {HandyComposeComponent} from "../../../../Inputs/Article/5Handy/handy-compose.component";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {KategorienWithSubkategorienService} from "../../../../../Services/kategorien-with-subkategorien.service";

@Component({
  selector: 'app-handy-table',
  templateUrl: './handy-table.component.html',
  styleUrls: ['../table.css','../../../../../shared_css/table_details.css' ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HandyTableComponent extends TableComponentBase{

  constructor(
    TableService: HandyTableService,  // Use HandyTableService here
    private updateElementService: HandyUpdateElementService, // Use HandyUpdateElementService here
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
    kategorienWithSubkategorienService : KategorienWithSubkategorienService
  ){
    super(_liveAnnouncer, dialog , TableService, kategorienWithSubkategorienService);
    this.read();
  }

  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.handy } // Replace 'notebook' with 'handy'
    delete flattenedData.handy; // Replace 'notebook' with 'handy'
    return flattenedData;
  }

  protected open_the_dialog_for_deleting_artikel(element: ProjectArticle): void {
    this.dialog.open(DialogDeleteHandyComponent, { // Use DialogDeleteHandyComponent here
      data: element
    })
  }

  protected open_the_dialog_for_updating_artikel(element: any): void {
    this.updateElementService.activate(element);
    this.dialog.open(HandyComposeComponent) // Use HandyComposeComponent here
  }
}
