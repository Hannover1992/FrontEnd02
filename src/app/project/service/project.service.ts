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
  project: Project;
  constructor( private http: HttpClient) {
    this.project_observable = new Observable<ProjectInterface>();
    this.project = new Project();
  }

  async getProject( number: number = 0) {
    this.project_observable =  this.http.get<ProjectInterface>(this.generateURL(number));
    this.project_observable.subscribe( (project) => {
      this.project =
        new Project(
          project.ID
          ,project.Standort
          ,project.Niederlassung
          ,project.Auftragsart
          ,project.Status
          ,project.Logistikkoordinator
          ,project.LK_1
          ,project.LK_2
          ,project.ZuKo
          ,project.Auftragsdatum
          ,project.Startdatum
          ,project.Endtermin
          ,project.Netto_Auftragswert
          ,project.Kommentar
          ,project.Anlagenummer
          ,project.PM_1
          ,project.PM_2
        );
    });
  }

  generateURL(number: number) {
    return URL + '/project/' + String(number);
  }
}


