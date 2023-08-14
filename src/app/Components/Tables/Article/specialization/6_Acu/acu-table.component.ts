import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AcuTableService} from "../../../../../Services/Article/specialization/acu-table.service";
import {AcuUpdateElementService} from "../../../../Inputs/Article/7Acu/service/acuUpdateElement.service";
import {MatDialog} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {TableComponentBase} from "../../TableComponentBase";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {AcuComposeComponent} from "../../../../Inputs/Article/7Acu/acu-compose.component";
import {DialogDeleteAcuComponent} from "../../../../Inputs/Article/7Acu/dialog-delete-acu/dialog-delete-acu.component";
import {KategorienWithSubkategorienService} from "../../../../../Services/kategorien-with-subkategorien.service";

@Component({
  selector: 'app-acu-table',
  templateUrl: './acu-table.component.html',
  styleUrls: ['../table.css','../../../../../shared_css/table_details.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AcuTableComponent extends TableComponentBase {

  constructor(
    TableService: AcuTableService,
    private updateElementService: AcuUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
    kategorienWithSubkategorienService : KategorienWithSubkategorienService
  ) {
    super(_liveAnnouncer, dialog , TableService, kategorienWithSubkategorienService);
    this.read();
  }

  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.acu } // Spread 'acu' properties into the flattenedData object
    delete flattenedData.acu; // Remove the 'acu' property as it has been flattened
    return flattenedData;
  }

  protected open_the_dialog_for_deleting_artikel(element: ProjectArticle): void {
    this.dialog.open(DialogDeleteAcuComponent, { // Use DialogDeleteAcuComponent here
      data: element
    })
  }

  protected open_the_dialog_for_updating_artikel(element: any): void {
    this.updateElementService.activate(element);
    this.dialog.open(AcuComposeComponent) // Use AcuComposeComponent here
  }
}
