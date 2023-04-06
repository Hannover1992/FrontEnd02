import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjectInterface} from "../project.interface";
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
    expect(service.project_observable).toBeDefined();
  });


  it(' the project should be an observable', () => {
    expect(service.project_observable).toEqual(jasmine.any(Observable));
  });

  it(' after rund the function get Project_old, the project should be an object', () => {
    service.getProject();
    expect(service.project_observable).toEqual(jasmine.any(Object));
  });



});
