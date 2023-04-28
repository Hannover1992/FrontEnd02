import { Injectable } from '@angular/core';
import {URL} from '../../../../settings';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../project/project";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  // projects: Project[];
  selectedProject: BehaviorSubject<string> = new BehaviorSubject('3011');
  projects_subject!: BehaviorSubject<Project[]>;
  initialized: boolean = false;

  setProjects: ((newValue: any) => void) | undefined;

  constructor(public http: HttpClient ) {
    // this.projects = [];
    this.getProjects();

    // this.selectedProject.subscribe(project => {
    //   console.log(project)
    // });

    this.setProjects = (newValue) => {
      this.projects_subject.next(newValue);
    };

  }

  public getProjects() {
    this.http.get<Project[]>(this.generateURL()).subscribe(
      (project_arr) => {
        this.projects_subject = new BehaviorSubject<Project[]>(project_arr);
        // this.projects = this.projects_subject.getValue();
      });
  }

  generateURL() {
    return URL + '/projects';
  }
}



