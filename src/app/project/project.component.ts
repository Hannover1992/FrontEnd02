import { Component, OnInit } from '@angular/core';
import {Project} from '../project/project';
import {Observable, Subscription} from "rxjs";
import {URL} from "../settings";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Project';
  project: Observable<Project>;

  constructor( private http: HttpClient) {
    this.project = new Observable<Project>();
  }

  ngOnInit(): void {
  }

  getProject() {
    this.project = this.http.get<Project>(this.generateURL());
    console.log(this.project);
  }

  generateURL(number: number = 0) {
    return URL + '/project/' + String(number);
  }
}
