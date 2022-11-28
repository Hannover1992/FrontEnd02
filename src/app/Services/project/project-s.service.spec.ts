import { TestBed } from '@angular/core/testing';

import { ProjectSService } from './project-s.service';
import {HttpClientModule} from "@angular/common/http";

describe('ProjectSService', () => {
  let service: ProjectSService;

  beforeEach(() => {

    TestBed.configureTestingModule({
     imports : [HttpClientModule]
    });
    service = TestBed.inject(ProjectSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(' expect project to be defined', () => {
    expect(service.project).toBeDefined();
  });
});
