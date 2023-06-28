import {Component, ContentChild, TemplateRef, ViewChild} from '@angular/core';
import {ProjectsService} from "../../../projectTable/service/projects.service";
import {AssetTableService} from "../../../../../Services/asset-table.service";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogDeleteProjectComponent
} from "../../../projectTable/projects-table/dialog-delete-project/dialog-delete-project.component";
import {DialogDeleteAssetComponent} from "./dialog-delete-asset/dialog-delete-asset.component";
import {
  AssetComposeComponent
} from "../../../../Inputs/Article/old/Specialization/asset/asset-compose/asset-compose.component";

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

export class AssetTableComponent {
  dataSource: MatTableDataSource<ProjectArticle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ContentChild('content') content!: TemplateRef<any>;

  expandedElement:  ProjectArticle | null;
  displayedColumns = this.setup_Visibility();

  private dialog: MatDialog;

  constructor(
    public assetTableService: AssetTableService,
    private _liveAnnouncer: LiveAnnouncer,
    dialog: MatDialog
)
{
  this.dialog = dialog;
  this.dataSource = new MatTableDataSource(assetTableService.assets.getValue());
    this.expandedElement = null;
    this.lead_the_data_from_database();
  }

  lead_the_data_from_database() {
    this.assetTableService.assets.subscribe((data) => {
      let data_flatten = data.map(this.flattenData);
      this.dataSource = new MatTableDataSource(data_flatten);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  flattenData(data: any) {
    const flattenedData = { ...data, ...data.artikel, ...data.artikel.assets, ...data.artikel.unterkategorie, ...data.artikel.unterkategorie.kategorien };
    delete flattenedData.artikel;
    return flattenedData;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  announceSortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


   setup_Visibility() {
    return  [
      'projekt_artikel_id',
      'projekt_id',
      'artikel_id',
      "artikelname",
      'menge',
      'kategoriename',
      'kategorie_id',
      'ID',
      'preis',
      'beschreibung',
      // 'seriennummer',
    ];
  }

  open_the_dialog_for_deleting_artikel(element: ProjectArticle){
    this.dialog.open(DialogDeleteAssetComponent, {
      data: element
    });

  }

  open_the_dialog_for_updating_artikel(element: any) {
    this.dialog.open(AssetComposeComponent, {
      data: {
        element: element
      }
    });
  }
}
