import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInputDetailComponent } from './article-input-detail.component';

describe('AssetInputDetailComponent', () => {
  let component: ArticleInputDetailComponent;
  let fixture: ComponentFixture<ArticleInputDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInputDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleInputDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
