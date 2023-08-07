import {animate, state, style, transition, trigger} from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ProjectInterface} from "../../../Inputs/project_input/project.interface";
import {ProjectsService} from "../service/projects.service";
import {Project} from "../../../Inputs/project_input/project";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {UpdateSingleProjectComponent} from "../../../Inputs/project_input/update-single-project/update-single-project.component";
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
  dataSource: MatTableDataSource<Project>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = this.setup_Visibility();
  expandedElement: ProjectInterface | null;

  constructor(
              private projectsService: ProjectsService,
              private _liveAnnouncer: LiveAnnouncer,
              private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(projectsService.projects.getValue());
    this.expandedElement = null;
  }

  ngAfterViewInit(): void {
    this.lead_the_data_from_database();
  }

  lead_the_data_from_database() {
    this.projectsService.projects.subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
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
    this.projectsService.selectedProjectID.next(element.ID);
  }

  setup_Visibility() {
    return  [ 'ID',
      // 'Anlagenummer',

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
  }
}

