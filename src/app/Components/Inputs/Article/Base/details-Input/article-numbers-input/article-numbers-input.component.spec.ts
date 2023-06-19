import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNumbersInputComponent } from './article-numbers-input.component';

describe('AssetNumbersInputComponent', () => {
  let component: ArticleNumbersInputComponent;
  let fixture: ComponentFixture<ArticleNumbersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleNumbersInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNumbersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
