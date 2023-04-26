import { Component } from '@angular/core';
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";

@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css']
})
export class AssetTableComponent {
  menu_title: any;

  constructor(public projectsService: ProjectsService) {
    this.menu_title = this.projectsService.selectedProject.getValue();
    this.projectsService.selectedProject.subscribe(project => {
      this.menu_title = project;
    });
    // if(this.projectsService.initialized == false){
    //   this.projectsService.selectedProject.next('3011');
    // }
  }


}
