import {Component, ViewChild} from '@angular/core';
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {KategorieService} from "../kategorie/kategorie.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Project} from "../project/project";
import {ProjectArticle} from "../../Interface/projectArticle";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {ProjectInterface} from "../project/project.interface";
import {UpdateSingleProjectComponent} from "../project/update-single-project/update-single-project.component";
import {
  DialogDeleteProjectComponent
} from "../projectTable/projects-table/dialog-delete-project/dialog-delete-project.component";

@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AssetTableComponent {
  selected_project: any;
  selected_kategorie: any;

  private dataSource: MatTableDataSource<ProjectArticle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  expandedElement:  ProjectArticle | null;
  displayedColumns = this.setup_Visibility();

  constructor(
    public projectsService: ProjectsService,
    public kategorieService: KategorieService,
    public assetTableService: AssetTableService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
)
{
    this.dataSource = new MatTableDataSource(assetTableService.assets.getValue());
    this.expandedElement = null;
  }


  ngAfterViewInit(): void {
    this.lead_the_data_from_database();
  }


  lead_the_data_from_database() {
    this.assetTableService.assets.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  //toDo: Extract this Method
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  //toDo: Extract This Method
  announceSortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  //toDo: Implement for the Asset Table

  // open_the_dialog_window_for_editing(element: ProjectInterface) {
  //   this.dialog.open(UpdateSingleProjectComponent, {
  //     data: element,
  //     enterAnimationDuration: 500,
  //     exitAnimationDuration: 300
  //   });
  // }
  //
  // open_the_dialog_for_deleting_project(element: ProjectInterface) {
  //   this.dialog.open(DialogDeleteProjectComponent, {
  //     data: element
  //   });
  // }
  //
  // select_project({element}: { element: any }) {
  //   this.projectsService.selectedProject.next(element.ID);
  // }

   setup_Visibility() {
    return  [
      'projekt_artikel_id',
      'projekt_id'
    ];
  }
}
