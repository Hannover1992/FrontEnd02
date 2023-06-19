import { TestBed } from '@angular/core/testing';

import { CurrentArticleAsset } from './current-article-asset.service';

describe('CurrentInputAssetService', () => {
  let service: CurrentArticleAsset;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentArticleAsset);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
