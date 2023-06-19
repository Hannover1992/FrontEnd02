import { TestBed } from '@angular/core/testing';

import { HoldFormInSyncService } from './hold-form-in-sync.service';

describe('HoldFormInSyncService', () => {
  let service: HoldFormInSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoldFormInSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
