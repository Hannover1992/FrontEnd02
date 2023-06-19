import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsComposeComponent } from './article-details-compose.component';

describe('ArticleDetailsComposeComponent', () => {
  let component: ArticleDetailsComposeComponent;
  let fixture: ComponentFixture<ArticleDetailsComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailsComposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetailsComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
