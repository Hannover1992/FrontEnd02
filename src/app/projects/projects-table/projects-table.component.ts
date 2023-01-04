import {animate, state, style, transition, trigger} from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ProjectInterface} from "../../project/project.interface";
import {ProjectsService} from "../service/projects.service";
import {Project} from "../../project/project";

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
  displayedColumns = [
    'ID',
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
  columnsToDisplayWithExpand = [
    ...this.displayedColumns,
    'expand',
  ];
// TODO: replace this with real data from your application
  expandedElement: ProjectInterface | null;
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  constructor(  private projectsService: ProjectsService  ) {
    this.projectsService = projectsService;
    this.dataSource = new MatTableDataSource(projectsService.projects);
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


  lead_the_data_from_database(){
    this.projectsService.projects_observable.subscribe((data) => {
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

  addProject1() {
    let project_temp: ProjectInterface = new Project();
    project_temp.ID = 666;
    project_temp.Anlagenummer = 666;
    project_temp.Standort = "666";
    if (project_temp instanceof Project) {
      this.dataSource.data.push(project_temp)
    }
    // this.dataSource = new MatTableDataSource(this.dataSource.data);
  }
}
