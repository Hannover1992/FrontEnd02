import { Injectable } from '@angular/core';
import {URL} from '../../../../settings';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../project/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[];
  projects_observable: Observable<Project[]>;
  projects_subject: Subject<Project[]>;
  selectedProject = new Subject<string>();

  setProjects: ((newValue: any) => void) | undefined;

  constructor(public http: HttpClient ) {
    this.projects = [];
    this.selectedProject.next('3011')
    this.projects_subject = new Subject<Project[]>();
    this.projects_observable = this.projects_subject.asObservable();
    this.getProjects();

    this.setProjects = (newValue) => {
      this.projects_subject.next(newValue);

    };

  }

  public getProjects() {
    this.http.get<Project[]>(this.generateURL()).subscribe(
      (project_arr) => {
        this.projects = project_arr;
        this.projects_subject.next(this.projects);
      });
  }

  generateURL() {
    return URL + '/projects';
  }
}



