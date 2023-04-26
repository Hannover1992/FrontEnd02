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
  projects: Observable<Project[]>;
  myControl: any;
  filteredOptions: any  ;
  menu_title = '';

  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.projects_observable
    this.projectsService.selectedProject.subscribe(project => {
      this.menu_title = project;
    });
    this.projectsService.selectedProject.next('3011');
  }

  onInit() {
  }
}
