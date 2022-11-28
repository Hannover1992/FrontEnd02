import { Injectable } from '@angular/core';
import {URL} from '../../settings';
import {ProjectsInterface} from '../projects.interface';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Projects} from "../projects";
import {Project} from "../../project/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //toDo: Aufraumen
  projects: Project[];
  projects_observable: Observable<Project[]>;

  constructor( private http: HttpClient ) {
    this.projects_observable = this.http.get<Project[]>(this.generateURL());
    this.projects_observable.subscribe(
      (project_arr) => {
        this.projects = project_arr;
        console.log(this.projects);
      });
    this.projects = []
  }

  generateURL() {
    return URL + '/projects';
  }
}
