import { Injectable } from '@angular/core';
import {URL} from "../../../../settings";
import {ProjectsService} from "../../projectTable/service/projects.service";

@Injectable({
  providedIn: 'root'
})
export class AssetTableService {
  private currents_selectd_projekt_id!: number;
  private unterkategorie!: string;


  constructor(private projectsService: ProjectsService) {
    this.projectsService.selectedProject;
  }


  generateURL() {

    return URL + '/assets' + '/' +  this.currents_selectd_projekt_id
    + '/' + this.unterkategorie;
    //toDo: create service, current selectd Kategorie
  }
}
