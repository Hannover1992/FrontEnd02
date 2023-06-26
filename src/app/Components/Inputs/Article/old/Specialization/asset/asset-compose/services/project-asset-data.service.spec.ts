import { TestBed } from '@angular/core/testing';

import { ProjectAssetArticle } from './project-asset-article';

describe('ProjectAssetDataService', () => {
  let service: ProjectAssetArticle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAssetArticle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
