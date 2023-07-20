import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SimkartenTableService} from "../../../../../Services/Article/specialization/simkarten-table.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {TableComponentBase} from "../../TableComponentBase";
import { SimkartenUpdateElementService } from "../../../../Inputs/Article/3Simkarte/service/SimkartenUpdateElementService";
import {DialogDeleteSimkartenComponent} from "./dialog-delete-simkarten/dialog-delete-simkarten.component";
import {Simkarten_compose} from "../../../../Inputs/Article/3Simkarte/simkarten_compose";

@Component({
  selector: 'app-simkarten-table',
  templateUrl: './simkarten-table.component.html',
  styleUrls: ['../table.css','../../../../../shared_css/table_details.css' ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SimkartenTableComponent extends TableComponentBase {

  constructor(
    TableService: SimkartenTableService,
    private updateElementService: SimkartenUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
  ){
    super(_liveAnnouncer, dialog, TableService );
  }

  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.simkarten }
    delete flattenedData.simkarten;
    return flattenedData;
  }


  open_the_dialog_for_deleting_artikel(element: ProjectArticle): void{
    this.dialog.open(DialogDeleteSimkartenComponent, {
      data: element
    });

  }

  open_the_dialog_for_updating_artikel(element: any) : void {
    this.updateElementService.activate(element);
    this.dialog.open(Simkarten_compose);
  }

}
