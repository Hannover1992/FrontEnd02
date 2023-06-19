import { TestBed } from '@angular/core/testing';

import { ArtikelFormDataService } from './artikel-form-data.service';

describe('ArtikelFormDataService', () => {
  let service: ArtikelFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikelFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
