import { Injectable } from '@angular/core';
import {URL} from '../settings';
import {Project} from '../project/project';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectSService {
  project: Observable<Project>;
  constructor( private http: HttpClient) {
    this.project = new Observable<Project>();
  }

async getProject( number: number = 0) {
  this.project =  this.http.get<Project>(this.generateURL(number));
}

generateURL(number: number) {
  return URL + '/project/' + String(number);
}
}


