import { Component } from '@angular/core';
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {KategorieService} from "../kategorie/kategorie.service";

@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css']
})

export class AssetTableComponent {
  selected_project: any;
  selected_kategorie: any;

  constructor(
    public projectsService: ProjectsService,
    public kategorieService: KategorieService,
    public assetTableService: AssetTableService
  ) {
    this.assetTableService.assets.subscribe(assets => {
      console.log(assets);
    })
  }

  ngOnInit() {
  }

}
