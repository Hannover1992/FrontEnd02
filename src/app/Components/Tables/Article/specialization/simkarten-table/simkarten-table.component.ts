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
} from "../../../../Inputs/Article/upsert/asset-compose-create/asset-compose-create.component";
import {
  SimkartenUpdateElementService
} from "../../../../Inputs/Article/upsert/asset-compose-create/service/updateService/specific/SimkartenUpdateElementService";

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


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ContentChild('content') content!: TemplateRef<any>;

  expandedElement:  ProjectArticle | null;
  displayedColumns = this.setup_Visibility();



  private dialog: MatDialog;

  constructor(
    public TableService: SimkartenTableService,
    private updateElementService: SimkartenUpdateElementService,
    _liveAnnouncer: LiveAnnouncer,
    dialog: MatDialog,
  ){

    super(_liveAnnouncer);
    this.dialog = dialog;
    this.dataSource = new MatTableDataSource(TableService.data.getValue());
    this.expandedElement = null;
    this.read();
  }


  read() {
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
  open_the_dialog_for_deleting_artikel(element: ProjectArticle){
    this.dialog.open(DialogDeleteAssetComponent, {
      data: element
    });

  }

  //toDo: overwrite
  open_the_dialog_for_updating_artikel(element: any) {
    this.updateElementService.activate(element);
    this.dialog.open(AssetComposeCreateComponent);
  }


}
