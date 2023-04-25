import { TestBed } from '@angular/core/testing';

import { AssetTableService } from './asset-table.service';

describe('AssetTableService', () => {
  let service: AssetTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
