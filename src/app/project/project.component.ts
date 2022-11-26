import { Component, OnInit } from '@angular/core';
import {Project} from '../project/project';
import {Observable, Subscription} from "rxjs";
import {URL} from "../settings";
import {HttpClient} from "@angular/common/http";
import {ProjectSService} from "../Services/project-s.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Project';
  project: Observable<Project>;

  constructor( private http: HttpClient, private projectService: ProjectSService) {
    this.project = projectService.project;
  }

  ngOnInit(): void {
    this.projectService.getProject()
      .then ( () => {
        this.project = this.projectService.project;
      });
  }
}
