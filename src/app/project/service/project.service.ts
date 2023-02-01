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

  constructor(public http: HttpClient) {
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

  async create(project: ProjectInterface) {
    return this.http.post<ProjectInterface>(this.sendURL(), project);
    // try{
    //   this.project_to_send = this.http.post<ProjectInterface>(this.sendURL(), project);
    //   return this.project_to_send;
    // } catch (e) {
    //   console.log(e);
    //   return e;
    // };
    // this.project_to_send.subscribe(
    //   (response) => {
    //     // console.log(response);
    //   },
    //   (error) => {
    //     // console.log(error);
    //     // console.log(error.error.message);
    //     // throw new Error(error.error.message);
    //   });
    // return this.project_to_send;
  }

  getURL(number: number) {
    return URL + '/project/' + String(number);
  }

  sendURL() {
    return URL + '/project';
  }

}


