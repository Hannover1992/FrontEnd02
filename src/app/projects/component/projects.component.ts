import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../service/projects.service";
import {Project} from "../../project/project";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // project : Project[];
  projects: Project[];
  constructor(public projectsService : ProjectsService ) {
    // this.projects = this.http.get<Project[]>(this.projectsService.generateURL());
    this.projectsService.projects_observable.subscribe(
      (projects) => {
        this.projects = projects;
      });
    this.projects = [];
  }



  ngOnInit(): void {
  }

}
