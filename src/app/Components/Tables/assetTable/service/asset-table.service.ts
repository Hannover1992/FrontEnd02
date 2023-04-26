import { Injectable } from '@angular/core';
import {URL} from "../../../../settings";
import {ProjectsService} from "../../projectTable/service/projects.service";

@Injectable({
  providedIn: 'root'
})
export class AssetTableService {


  constructor(private projectsService: ProjectsService) {
    this.projectsService.selectedProject;
  }


  generateURL() {

    return URL + '/assets' + '/';
  }
}
