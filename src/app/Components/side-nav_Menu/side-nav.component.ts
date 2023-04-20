import { Component } from '@angular/core';
import {ProjectsService} from "../Tables/projectTable/service/projects.service";
import {Observable} from "rxjs";
import {Project} from "../Tables/project/project";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  current_project_number = 802007;
  projects: Observable<Project[]>;
  myControl: any;
  filteredOptions: any  ;

  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.projects_observable
  }
}
