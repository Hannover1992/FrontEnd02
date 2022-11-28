import { Injectable } from '@angular/core';
import {URL} from '../../settings';
import {ProjectInterface} from '../project.interface';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: Observable<ProjectInterface>;
  constructor( private http: HttpClient) {
    this.project = new Observable<ProjectInterface>();
  }

  async getProject( number: number = 0) {
    this.project =  this.http.get<ProjectInterface>(this.generateURL(number));
  }

  generateURL(number: number) {
    return URL + '/project/' + String(number);
  }
}


