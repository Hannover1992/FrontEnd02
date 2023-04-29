import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "../project";

describe('ProjectSService', () => {
  let service: ProjectService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProjectService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' expect project to be defined', () => {
  });


  it(' the project should be an observable', () => {
  });

  it(' after rund the function get Project_old, the project should be an object', () => {
    // service.getProject();
  });

  it('test creat function ', (done) => {
    // "ID": 11, //   "Standort": "sometihngggg", //   "Niederlassung": "Niederlassung0", //   "Auftragsart": "Operativ", //   "Status": "Aktive", //   "Logistikkoordinator": "Logistikkoordinator0", //   "LK_1": "LK_10", //   "LK_2": "LK_20", //   "ZuKo": "ZuKo0", //   "Auftragsdatum": "1970-01-01T00:00:00.000Z", //   "Startdatum": "1970-01-01T00:00:00.000Z", //   "Endtermin": "1970-01-01T00:00:00.000Z", //   "Netto_Auftragswert": "Netto_Auftragswert0", //   "Kommentar": "I'm Pickle Rick!", //   "Anlagenummer": 0, //   "PM_1": "PM_10", //   "PM_2": "PM_20"
    //create a project with the same data as in comments above
    let project_to_send = new Project(11);
    service.create(project_to_send)
      .then(() => {
        done();
      });
  });



});
