import {animate, state, style, transition, trigger} from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ProjectInterface} from "../../project/project.interface";
import {ProjectsService} from "../service/projects.service";
import {Project} from "../../project/project";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {UpdateSingleProjectComponent} from "../../project/update-single-project/update-single-project.component";
import {DialogDeleteProjectComponent} from "./dialog-delete-project/dialog-delete-project.component";

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ProjectsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProjectInterface>;
  dataSource: MatTableDataSource<Project>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    // displayedColumns = ['id', 'name'];
  displayedColumns = [ 'ID',
    //toDo: Anlage nummer entfernen auch aus dem Datenbank, Input , Update
    'Anlagenummer',

    'Standort',
    'Niederlassung',
    'Kommentar',

    // 'Auftragsart',
    // 'Status',
    // 'Netto_Auftragswert',
    //
    // 'Auftragsdatum',
    // 'Startdatum',
    // 'Endtermin',
    //
    //
    // 'Logistikkoordinator',
    // 'LK_1',
    // 'LK_2',
    // 'PM_1',
    // 'PM_2',
    // 'ZuKo',
  ];

  columnsToDisplayWithExpand = [
    ...this.displayedColumns,
    // 'expand',
  ];

  expandedElement: ProjectInterface | null;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  constructor(private projectsService: ProjectsService, private _liveAnnouncer: LiveAnnouncer,
              private dialog: MatDialog) {
    this.projectsService = projectsService;
    this.dataSource = new MatTableDataSource(projectsService.projects_subject.getValue());
    this.projectsService.projects_subject.subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }
    )
    this.expandedElement = null;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.lead_the_data_from_database();
    this.create_detailed_view();
  }

  private create_detailed_view() {
    this.dataSource.data.forEach((element, index) => {
      element.detailRow = [];
      this.dataSource.data[index].detailRow.push;
    });
  }


  lead_the_data_from_database() {
    this.projectsService.projects_subject.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  announceSortChange(sortState: Sort){
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  open_the_dialog_window_for_editing(element: ProjectInterface) {
    this.dialog.open(UpdateSingleProjectComponent, {
      data: element,
      enterAnimationDuration: 500,
      exitAnimationDuration: 300
    });
  }

  open_the_dialog_for_deleting_project(element: ProjectInterface) {
    this.dialog.open(DialogDeleteProjectComponent, {
      data: element
    });
  }

  select_project({element}: { element: any }) {
    this.projectsService.selectedProject.next(element.ID);
  }
}
