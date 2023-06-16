import { TestBed } from '@angular/core/testing';

import { ErweiterterAssetRetrivalService } from './erweiterter-asset-retrival.service';

describe('ErweiterterAssetRetrivalService', () => {
  let service: ErweiterterAssetRetrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErweiterterAssetRetrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
