import { Injectable } from '@angular/core';
import {URL} from '../../../settings';
import {ProjectInterface} from '../project.interface';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Project} from "../project";
import {ProjectsService} from "../../projectTable/service/projects.service";
// import {fromPromise} from "rxjs/dist/types/internal/observable/innerFrom";

//toDo: handle error when can't delete becouse project in Bestellung

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: ProjectInterface;
  project_observable: Observable<ProjectInterface>;
  project_to_send: Observable<ProjectInterface>;

  projects_error_subject: Subject<boolean>;
  // set_primary_error: ((newValue: any) => void) | undefined;

  constructor(public http: HttpClient, public projectsService: ProjectsService) {
    this.project_observable = new Observable<ProjectInterface>();
    this.project = new Project();
    this.project_to_send = new Observable<ProjectInterface>();
    this.project_observable.subscribe(
      (project) => {
        this.project = project;
      }
    );
    this.projects_error_subject = new Subject<boolean>();
    this.projects_error_subject.next(false);
  }



  async getProject( number: number = 0) {
    this.project_observable =  this.http.get<ProjectInterface>(this.getURL(number));
    this.project_observable.subscribe( (project) => {
      this.project = project;
    });
    return this.project_observable;
  }

  async create(project: ProjectInterface) {
      this.project_to_send = this.http.post<ProjectInterface>(this.sendURL(project.ID), project);
      this.project_to_send.subscribe(
        (response) => {
          //@ts-ignore
          if(response.message === 'Project created') {
            this.projects_error_subject.next(false);
            let project_to_add_at_the_end_of_the_list = creat_an_project_from_project_to_send(project);
            this.projectsService.projects.push(project_to_add_at_the_end_of_the_list);
            //@ts-ignore
            this.projectsService.setProjects(this.projectsService.projects);
        }}
        , () => {
          this.projects_error_subject.next(true);
        }
      )
  }

  async update(project: ProjectInterface) {
    this.project_to_send = this.http.put<ProjectInterface>(this.sendURL(project.ID), project);
    this.project_to_send.subscribe((response) => {
      //@ts-ignore
      if(response.message === 'Project updated') {
        let id_of_project_to_update : number = project.ID;
        this.projects_error_subject.next(false);
        let project_to_update = creat_an_project_from_project_to_send(project);
        //find the id of the project to update
        this.iterate_over_the_projects_and_update_the_project_where_the_id_matches(id_of_project_to_update, project_to_update);
        //@ts-ignore
        this.projectsService.setProjects(this.projectsService.projects);
      }} , (error) => {
      this.projects_error_subject.next(true);
      throw error;
    });
  }


  async delete(project: ProjectInterface) {
    this.project_to_send = this.http.delete<ProjectInterface>(this.delURL(project.ID));
    this.project_to_send.subscribe((response) => {
      //@ts-ignore
      if(response.message === 'Project deleted') {
        this.projects_error_subject.next(false);
        let id_of_project_to_delete : number = project.ID;
        //iteraet over the projects and delete the project where the id matches
        this.iterate_over_the_projects_and_delete_the_project_where_the_id_matches(id_of_project_to_delete);
        //@ts-ignore
        this.projectsService.setProjects(this.projectsService.projects);
      }} , (error) => {
      this.projects_error_subject.next(true);
      throw error;
    });
  }


  private iterate_over_the_projects_and_update_the_project_where_the_id_matches(id_of_project_to_update: number, project_to_update: Project) {
    //iterate_over_the_projects_and_update_the_project_where_the_id_matches
    this.projectsService.projects.forEach((project, index) => {
      if (project.ID === id_of_project_to_update) {
        this.projectsService.projects[index] = project_to_update;
      }
    });
  }

  getURL(number: number) {
    return URL + '/project/' + String(number);
  }

  delURL(number: number) {
    return URL + '/project/' + String(number);
  }

  sendURL( ID: number) {
    return URL + '/project/' + String(ID);
  }

  private iterate_over_the_projects_and_delete_the_project_where_the_id_matches(id_of_project_to_delete: number) {
    this.projectsService.projects.forEach((project, index) => {
      if (project.ID === id_of_project_to_delete) {
        this.projectsService.projects.splice(index, 1);
      }
    });
  }
}


function creat_an_project_from_project_to_send(project_to_send: ProjectInterface) {
  let project = new Project(0);
  project.ID = project_to_send.ID;
  project.Standort = project_to_send.Standort;
  project.Niederlassung = project_to_send.Niederlassung;
  project.Auftragsart = project_to_send.Auftragsart;
  project.Status = project_to_send.Status;
  project.Logistikkoordinator = project_to_send.Logistikkoordinator;
  project.LK_1 = project_to_send.LK_1;
  project.LK_2 = project_to_send.LK_2;
  project.ZuKo = project_to_send.ZuKo;
  project.Auftragsdatum = project_to_send.Auftragsdatum;
  project.Startdatum = project_to_send.Startdatum;
  project.Endtermin = project_to_send.Endtermin;
  project.Netto_Auftragswert = project_to_send.Netto_Auftragswert;
  project.Kommentar = project_to_send.Kommentar;
  project.Anlagenummer = project_to_send.Anlagenummer;
  project.PM_1 = project_to_send.PM_1;
  project.PM_2 = project_to_send.PM_2;
  return project;
}
