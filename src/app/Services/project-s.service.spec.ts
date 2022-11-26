import { TestBed } from '@angular/core/testing';

import { ProjectSService } from './project-s.service';

describe('ProjectSService', () => {
  let service: ProjectSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
