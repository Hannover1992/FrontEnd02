import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import {HttpClientModule} from "@angular/common/http";

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
    expect(service.project).toBeDefined();
  });
});
