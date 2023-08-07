import { Injectable } from '@angular/core';
import {URL_DB} from '../../../../settings';
import {BehaviorSubject } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../../../Inputs/project_input/project";

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  selectedProjectID: BehaviorSubject<string> = new BehaviorSubject('3011');
  selectedProjectStandort: string = 'Lager Hannover'
  projects!: BehaviorSubject<Project[]>;
  initialized: boolean = false;

  constructor(public http: HttpClient ) {
    this.http.get<Project[]>(this.generateURL()).subscribe(
      (project_arr) => {
        this.projects = new BehaviorSubject<Project[]>(project_arr);
      });
    this.selectedProjectID.subscribe(ProjectID =>
        this.updateProjectStandort(ProjectID)
    )
  }

  public getProjects() {
    this.http.get<Project[]>(this.generateURL()).subscribe(
      (project_arr) => {
        this.projects.next(project_arr)
      });
  }

  public getProjectID(): number {
    const project = this.selectedProjectID.getValue();
    return parseInt(project);
  }


  generateURL() {
    return URL_DB + '/projects';
  }

  private updateProjectStandort(ProjectID : string) {
    const matchinProject = this.projects.value.find(p => p.ID === parseInt(ProjectID));

    if( matchinProject){
      this.selectedProjectStandort = matchinProject.Standort;
    }
  }
}



