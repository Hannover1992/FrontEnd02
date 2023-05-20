import { TestBed } from '@angular/core/testing';

import { UnterKategorieService } from './unter-kategorie.service';

describe('KategorieService', () => {
  let service: UnterKategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnterKategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
