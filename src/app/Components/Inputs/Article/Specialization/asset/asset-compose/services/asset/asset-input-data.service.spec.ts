import { TestBed } from '@angular/core/testing';

import { AssetData } from './asset-data.service';

describe('AssetInputDataService', () => {
  let service: AssetData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
