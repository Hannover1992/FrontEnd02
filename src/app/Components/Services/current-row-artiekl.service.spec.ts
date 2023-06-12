import { TestBed } from '@angular/core/testing';

import { CurrentRowArtieklService } from './current-row-artiekl.service';

describe('CurrentRowArtieklService', () => {
  let service: CurrentRowArtieklService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentRowArtieklService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
