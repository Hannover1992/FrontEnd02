import { Injectable } from '@angular/core';
import {URL} from '../../settings';
import {Projects} from '../projects.interface';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjects: Projects [];

  constructor() {
    this.getProjects = [];
  }
}
