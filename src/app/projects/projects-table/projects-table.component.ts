import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProjectsTableDataSource } from './projects-table-datasource';
import {ProjectInterface} from "../../project/project.interface";

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
    'Logistikkoordinator',
    'LK_1',
    'LK_2',
    'ZuKo',
    'Auftragsdatum',
    'Startdatum',
    'Endtermin',
    'Netto_Auftragswert',
    'Kommentar',
    'Anlagenummer',
    'PM_1',
    'PM_2'
  ];


  constructor() {
    this.dataSource = new ProjectsTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
