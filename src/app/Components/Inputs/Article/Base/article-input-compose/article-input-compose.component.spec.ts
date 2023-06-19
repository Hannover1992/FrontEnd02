import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInputComposeComponent } from './article-input-compose.component';

describe('ArticleInputComposeComponent', () => {
  let component: ArticleInputComposeComponent;
  let fixture: ComponentFixture<ArticleInputComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInputComposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleInputComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
