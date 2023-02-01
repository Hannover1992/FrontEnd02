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
     imports : [HttpClientModule]
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

  it( ' after rund the function get Project, the project should be an object', () => {
    service.getProject();
    expect(service.project_observable).toEqual(jasmine.any(Object));
  });


  function extracted() {
  }

  it( ' after rund the function create, the project should be an object', async () => {
    function create_temp_project_13() {
      let project = new Project();
      project.ID = 13;
      project.Standort = "Standort13";
      project.Logistikkoordinator = "Name13";
      return project;
    }
    let project = create_temp_project_13();
    try{
      let promise = service.create(project).catch((error) => {
        console.log(error);
      });
      // promise.then(
      //   () => {
      //     console.log("hier");
      //   }
      // ).catch(
      //   (error) => {
      //     console.log(error);
      //   }
      // )
    } catch (e){
      console.log(e);
    }
  });

  it(' after service.create, should throw error project exists ', async (done) => {

    function create_temp_project_13() {
      let project = new Project();
      project.ID = 13;
      project.Standort = "Standort13";
      project.Logistikkoordinator = "Name13";
      return project;
    }
    let project = create_temp_project_13();
    await service.create(project)
      .then( (project) => {
        expect(project).toEqual(jasmine.any(Object));
      })
      .catch( (error) => {
        expect(error).toEqual(jasmine.any(Error));
      })

    await service.create(project)
      .then( (project) => {
        expect(project).toEqual(jasmine.any(Object));
      })
      .catch( (error) => {
        expect(error).toEqual(jasmine.any(Error));
        done();
      })
  });
});
