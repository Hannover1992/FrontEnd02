import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RouterTableService} from "../../../../../Services/Article/specialization/router-table.service";
import {RouterUpdateElementService} from "../../../../Inputs/Article/6Router/service/router-update-element.service";
import {MatDialog} from "@angular/material/dialog";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {TableComponentBase} from "../../TableComponentBase";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {
  DialogDeleteRouterComponent
} from "../../../../Inputs/Article/6Router/dialog-delete-router/dialog-delete-router.component";

@Component({
  selector: 'app-router-table',
  templateUrl: './router-table.component.html',
  styleUrls: ['../table.css','../../../../../shared_css/table_details.css' ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class RouterTableComponent extends TableComponentBase {

  constructor(
    TableService: RouterTableService,
    private updateElementService: RouterUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
  ) {
    super(_liveAnnouncer, dialog, TableService );
    this.read();
  }

  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.router } // Replace 'handy' with 'router'
    delete flattenedData.router; // Replace 'handy' with 'router'
    return flattenedData;
  }

  protected open_the_dialog_for_deleting_artikel(element: ProjectArticle): void {
    this.dialog.open(DialogDeleteRouterComponent, { // Use DialogDeleteRouterComponent here
      data: element
    })
  }

  protected open_the_dialog_for_updating_artikel(element: any): void {
    // this.updateElementService.activate(element);
    // this.dialog.open(RouterComposeComponent) // Use RouterComposeComponent here
  }

}
