import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProjectsTableDataSource } from './projects-table-datasource';
import {ProjectInterface} from "../../project/project.interface";
import {ProjectsService} from "../service/projects.service";

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ProjectInterface>;
  dataSource: ProjectsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];
  displayedColumns = [
    'ID',
    'Standort',
    'Niederlassung',
    'Auftragsart',
    'Status',
    'Auftragsdatum',
    'Startdatum',
    'Endtermin',
    'Netto_Auftragswert',
    'Anlagenummer',
    'Logistikkoordinator',
    'LK_1',
    'LK_2',
    'PM_1',
    'PM_2',
    'ZuKo',
    'Kommentar',
  ];

// TODO: replace this with real data from your application

  constructor(  private projectsService: ProjectsService  ) {
    this.projectsService = projectsService;
    this.dataSource = new ProjectsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.lead_the_data_from_database()
  }

  lead_the_data_from_database(){
    this.projectsService.projects_observable.subscribe((data) => {
      this.dataSource = new ProjectsTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }
}
