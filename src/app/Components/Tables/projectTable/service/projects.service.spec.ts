import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import {HttpClientModule} from "@angular/common/http";

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
      expect(value.length).toEqual(10);
      expect(value[1].ID).toEqual(1);
      expect(value[1].Standort).toEqual("Standort1");
      expect(service.projects.length).toEqual(10);
      done();
    });

  });

  it('at the start i have an 10 projcets form databsae, then when i use set Project_old the arr si empty', (done: DoneFn) => {
    //wait 1 second
    var i = 0;
    service.projects.subscribe((value) => {
      if( i == 0){
        expect(value.length).toEqual(10);
        expect(service.projects.length).toEqual(10);
        i++;
      } else {
        expect(value.length).toEqual(0);
        service.projects = value;
        expect(service.projects.length).toEqual(0);
        done();
      }
    });

    //wait 2 seconds
    setTimeout(() => {
      // @ts-ignore
      service.setProjects([]);
    } , 2000);
    // @ts-ignore
  });


});
