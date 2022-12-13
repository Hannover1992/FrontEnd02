import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import {HttpClientModule} from "@angular/common/http";
import {Project} from "../../project/project";
import {Observable} from "rxjs";

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the function getProjects should be defined', () => {
    expect(service.getProjects).toBeDefined();
  });

  it('returns simple value', (done: DoneFn) => {
    service.projects_observable.subscribe((value) => {
      expect(value.length).toEqual(12);
      expect(value[1].ID).toEqual(1);
      expect(value[1].Standort).toEqual("Standort1");
      expect(service.projects.length).toEqual(12);
      done();
    });
  });



});
