import { TestBed } from '@angular/core/testing';

import { ArticleData } from './article-data.service';

describe('ArtikelFormDataService', () => {
  let service: ArticleData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
