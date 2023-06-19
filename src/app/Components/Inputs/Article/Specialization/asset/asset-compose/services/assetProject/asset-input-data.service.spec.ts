import { TestBed } from '@angular/core/testing';

import { AssetInputDataService } from './asset-input-data.service';

describe('AssetInputDataService', () => {
  let service: AssetInputDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetInputDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
