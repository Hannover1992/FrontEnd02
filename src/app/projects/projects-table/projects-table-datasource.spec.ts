import { TestBed } from '@angular/core/testing';

import {HttpClientModule} from "@angular/common/http";
import {Project} from "../../project/project";
import {ProjectsTableDataSource} from "./projects-table-datasource";
import {ProjectInterface} from "../../project/project.interface";
import {DataSource} from "@angular/cdk/collections";

describe('ProjectsService', () => {
  let projectsTableDataSource: ProjectsTableDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    projectsTableDataSource = new ProjectsTableDataSource();
  });

  it('should be created', () => {
    expect(projectsTableDataSource).toBeTruthy();
  });


  it('', () => {
  });
});
