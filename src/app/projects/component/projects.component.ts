import { Component, OnInit } from '@angular/core';
import{ProjectsService} from "../service/projects.service";
import {Project} from  "../../project/project";
import {Observable} from "rxjs";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  projects_observable: Observable<Project[]>;

  constructor(public projectsService : ProjectsService ) {
    this.projects = projectsService.projects;
    this.projects_observable = this.projectsService.projects_observable;
    this.getProjects()
  }


  getProjects() {
    return this.projects_observable.subscribe(
      (project_arr) => {
        this.projects = project_arr;
      }
    )
  }

  ngOnInit(): void {
    this.getProjects();
  }

}
