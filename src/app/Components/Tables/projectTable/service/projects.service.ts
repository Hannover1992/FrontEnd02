import { Injectable } from '@angular/core';
import {URL} from '../../../../settings';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../project/project";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  selectedProject: BehaviorSubject<string> = new BehaviorSubject('802007');
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

  generateURL() {
    return URL + '/projects';
  }
}



