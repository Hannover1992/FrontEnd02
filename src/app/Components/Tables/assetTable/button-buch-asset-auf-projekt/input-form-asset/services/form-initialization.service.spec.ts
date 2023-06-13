import { TestBed } from '@angular/core/testing';

import { FormInitializationService } from './form-initialization.service';

describe('FormInitializationService', () => {
  let service: FormInitializationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormInitializationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
