import {Component, ViewChild} from '@angular/core';
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {KategorieService} from "../kategorie/kategorie.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Project} from "../project/project";
import {ProjectArticle} from "../../Interface/projectArticle";

@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css']
})

export class AssetTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selected_project: any;
  selected_kategorie: any;
  private dataSource: MatTableDataSource<ProjectArticle>;

  constructor(
    public projectsService: ProjectsService,
    public kategorieService: KategorieService,
    public assetTableService: AssetTableService
  )
  {
    this.dataSource = new MatTableDataSource(assetTableService.assets.getValue());
  }

  ngOnInit() {
    this.assetTableService.assets.subscribe(assets => {
      console.log(assets);
    })
  }

}
