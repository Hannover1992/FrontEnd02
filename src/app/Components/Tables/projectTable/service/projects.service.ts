import { Injectable } from '@angular/core';
import {URL_DB} from '../../../../settings';
import {BehaviorSubject } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../../Inputs/project_input/project";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  selectedProject: BehaviorSubject<string> = new BehaviorSubject('3011');
  projects!: BehaviorSubject<Project[]>;
  initialized: boolean = false;

  constructor(public http: HttpClient ) {
    this.http.get<Project[]>(this.generateURL()).subscribe(
      (project_arr) => {
        this.projects = new BehaviorSubject<Project[]>(project_arr);
      });
  }

  public getProjects() {
    this.http.get<Project[]>(this.generateURL()).subscribe(
      (project_arr) => {
        this.projects.next(project_arr)
      });
  }

  public getProjectID(): number {
    const project = this.selectedProject.getValue();
    return parseInt(project);
  }

  generateURL() {
    return URL_DB + '/projects';
  }
}



