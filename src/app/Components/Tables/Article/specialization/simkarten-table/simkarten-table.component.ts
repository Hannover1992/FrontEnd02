import {Component, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SimkartenTableService} from "../../../../../Services/Article/specialization/simkarten-table.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {TableComponentBase} from "../../TableComponentBase";
import {DialogDeleteAssetComponent} from "../assetTable/dialog-delete-asset/dialog-delete-asset.component";
import {
  AssetComposeCreateComponent
} from "../../../../Inputs/Article/2Asset/asset-compose-create.component";
import {
  SimkartenUpdateElementService
} from "../../../../Inputs/Article/3Simkarte/service/SimkartenUpdateElementService";
import {DialogDeleteSimkartenComponent} from "./dialog-delete-simkarten/dialog-delete-simkarten.component";
import {CreateSimkarteButtonComponent} from "./create-simkarte-button/create-simkarte-button.component";
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
    public TableService: SimkartenTableService,
    private updateElementService: SimkartenUpdateElementService,
    dialog: MatDialog,
    _liveAnnouncer: LiveAnnouncer,
  ){
    super(_liveAnnouncer, dialog );
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource(TableService.data.getValue());
    this.read();
  }


  read() : void {
    this.TableService.data.subscribe((data) => {
      let data_flatten = data.map(this.flattenData);
      this.dataSource = new MatTableDataSource(data_flatten);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  protected flattenExtend(flattenedData: any): any {
    flattenedData = {...flattenedData, ...flattenedData.simkarten }
    delete flattenedData.simkarten;
    return flattenedData;
  }


  //toDo: overwrite
  open_the_dialog_for_deleting_artikel(element: ProjectArticle): void{
    this.dialog.open(DialogDeleteSimkartenComponent, {
      data: element
    });

  }

  //toDo: overwrite
  open_the_dialog_for_updating_artikel(element: any) : void {
    this.updateElementService.activate(element);
    this.dialog.open(Simkarten_compose);
  }


}
