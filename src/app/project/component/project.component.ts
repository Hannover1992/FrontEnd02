import { Component, OnInit } from '@angular/core';
import {ProjectInterface} from '../project.interface';
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectService} from "../service/project.service";
import {Project} from "../project";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Project';
  projectObservable: Observable<Project>;
  project: Project;

  constructor( private http: HttpClient, private projectService: ProjectService) {
    this.projectObservable = projectService.project_observable;
    this.project = projectService.project;
  }

  ngOnInit(): void {
    this.projectService.getProject();
    this.projectService.project_observable.subscribe( (project) => {
      this.project = project;
    });
  }
}


