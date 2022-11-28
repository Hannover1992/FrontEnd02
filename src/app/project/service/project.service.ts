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
  project_observable: Observable<ProjectInterface>;
  project: ProjectInterface;

  constructor(private http: HttpClient) {
    this.project_observable = this.http.get<ProjectInterface>(this.generateURL(0));
    this.project = new Project();
    this.project_observable.subscribe(
      (project) => {
        this.project = project;
        // console.log(this.project);
      }
    );
  }

  async getProject( number: number = 0) {
    this.project_observable =  this.http.get<ProjectInterface>(this.generateURL(number));
    this.project_observable.subscribe( (project) => {
      this.project = project;
      console.log(this.project);
    });
    return this.project_observable;
  }

  generateURL(number: number) {
    return URL + '/project/' + String(number);
  }
}


