import {Component, ViewChild} from '@angular/core';
import {AssetTableService} from "../../../../../Services/Article/specialization/asset-table.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {DialogDeleteAssetComponent} from "./dialog-delete-asset/dialog-delete-asset.component";
import {
  AssetUpdateElementService
} from "../../../../Inputs/Article/upsert/asset-compose-create/service/updateService/specific/AssetUpdateElementService";
import {
  AssetComposeCreateComponent
} from "../../../../Inputs/Article/upsert/asset-compose-create/asset-compose-create.component";
import {TableComponentBase} from "../../TableComponentBase";


@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css','../../../../../shared_css/table_details.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class AssetTableComponent extends TableComponentBase {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ContentChild('content') content!: TemplateRef<any>;

  expandedElement:  ProjectArticle | null;
  displayedColumns = this.setup_Visibility();

  private dialog: MatDialog;

  constructor(
    private TableService: AssetTableService,
    private updateElementService: AssetUpdateElementService,
    _liveAnnouncer: LiveAnnouncer,
    dialog: MatDialog,
  )
  {
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
    flattenedData = {...flattenedData, ...flattenedData.assets }
    delete flattenedData.assets;
    return flattenedData;
  }


  open_the_dialog_for_deleting_artikel(element: ProjectArticle){
    this.dialog.open(DialogDeleteAssetComponent, {
      data: element
    });

  }

  open_the_dialog_for_updating_artikel(element: any) {
    this.updateElementService.activate(element);
    this.dialog.open(AssetComposeCreateComponent);
  }

}
