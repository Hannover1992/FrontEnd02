import { Injectable } from '@angular/core';
import {URL_DB} from '../../../../settings';
import {ProjectInterface} from '../project.interface';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectsService} from "../../../Tables/projectTable/service/projects.service";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects_error_subject: Subject<boolean>;

  constructor(public http: HttpClient, public projectsService: ProjectsService) {
    this.projects_error_subject = new Subject<boolean>();
    this.projects_error_subject.next(false);
  }

  async create(project: ProjectInterface) {
      this.http.post<ProjectInterface>(this.sendURL(project.ID), project).subscribe(
        (response) => {
          //@ts-ignore
          if(response.message === 'Project created') {
            this.projects_error_subject.next(false);
            this.projectsService.getProjects();
        }}
        , () => {
          this.projects_error_subject.next(true);
        }
      )
  }

  async update(project: ProjectInterface) {
    this.http.put<ProjectInterface>(this.sendURL(project.ID), project).
    subscribe((response) => {
      //@ts-ignore
      if(response.message === 'Project updated') {
        this.projectsService.getProjects();
      }} , (error) => {
      this.projects_error_subject.next(true);
      throw error;
    });
  }


  async delete(project: ProjectInterface) {
    this.http.delete<ProjectInterface>(this.delURL(project.ID))
    .subscribe((response) => {
      //@ts-ignore
      if(response.message === 'Project deleted') {
        this.projects_error_subject.next(false);
        this.projectsService.getProjects();
      }} , (error) => {
      this.projects_error_subject.next(true);
      throw error;
    });
  }

  getURL(number: number) {
    return URL_DB + '/project/' + String(number);
  }

  delURL(number: number) {
    return URL_DB + '/project/' + String(number);
  }

  sendURL( ID: number) {
    return URL_DB + '/project/' + String(ID);
  }

}
