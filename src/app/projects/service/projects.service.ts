import { Injectable } from '@angular/core';
import {URL} from '../../settings';
import {ProjectsInterface} from '../projects.interface';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Projects} from "../projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Projects;
  projects_observable: Observable<Projects>;

  constructor( private http: HttpClient ) {
    this. projects_observable = this.http.get<Projects>(this.generateURL());
    this.projects_observable.subscribe(
      (projects) => {
        this.projects = projects;
        console.log(this.projects);
      });
    this.projects = new Projects();
  }

  generateURL() {
    return URL + '/projects';
  }
}
