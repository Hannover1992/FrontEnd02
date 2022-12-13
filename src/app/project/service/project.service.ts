import { Injectable } from '@angular/core';
import {URL} from '../../settings';
import {ProjectInterface} from '../project.interface';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: ProjectInterface;
  project_observable: Observable<ProjectInterface>;
  project_to_send: Observable<ProjectInterface>;

  constructor(private http: HttpClient) {
    this.project_observable = this.http.get<ProjectInterface>(this.getURL(0));
    this.project = new Project();
    this.project_to_send = new Observable<ProjectInterface>();
    this.project_observable.subscribe(
      (project) => {
        this.project = project;
      }
    );
  }

  async getProject( number: number = 0) {
    this.project_observable =  this.http.get<ProjectInterface>(this.getURL(number));
    this.project_observable.subscribe( (project) => {
      this.project = project;
      console.log(this.project);
    });
    return this.project_observable;
  }

  async create(project: Project) {
    this.project_to_send = this.http.post<ProjectInterface>(this.sendURL(), project)
    return this.project_to_send.subscribe( (project) => {
      this.project = project;
      console.log("project create sucefully")
    })
  }

  getURL(number: number) {
    return URL + '/project/' + String(number);
  }

  sendURL() {
    return URL + '/project';
  }

}


