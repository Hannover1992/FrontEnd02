import { Component, OnInit } from '@angular/core';
import {ProjectInterface} from '../project.interface';
import {Observable, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectService} from "../service/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'Project';
  projectObservable: Observable<Project>;
  project: Project;

  constructor( private http: HttpClient, private projectService: ProjectService) {
    this.projectObservable = projectService.project_observable;
    this.project = new Project();
  }

  ngOnInit(): void {
    this.projectService.getProject()
      .then ( () => {
        this.projectObservable = this.projectService.project_observable;
        this.projectObservable.subscribe( (project) => {
          this.project = project;
        });
      });
  }
}


class Project implements ProjectInterface {
  Anlagenummer: number;
  Auftragsart: string;
  Auftragsdatum: Date;
  Endtermin: Date;
  ID: number;
  Kommentar: string;
  LK_1: string;
  LK_2: string;
  Logistikkoordinator: string;
  Netto_Auftragswert: string;
  Niederlassung: string;
  PM_1: string;
  PM_2: string;
  Standort: string;
  Startdatum: Date;
  Status: string;
  ZuKo: string;

  constructor() {
    this.Anlagenummer = 0;
    this.Auftragsart = '';
    this.Auftragsdatum = new Date();
    this.Endtermin = new Date();
    this.ID = 0;
    this.Kommentar = '';
    this.LK_1 = '';
    this.LK_2 = '';
    this.Logistikkoordinator = '';
    this.Netto_Auftragswert = '';
    this.Niederlassung = '';
    this.PM_1 = '';
    this.PM_2 = '';
    this.Standort = '';
    this.Startdatum = new Date();
    this.Status = '';
    this.ZuKo = '';
  }
}

