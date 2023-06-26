import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInputDateComponent } from './article-input-date.component';

describe('AssetInputDateComponent', () => {
  let component: ArticleInputDateComponent;
  let fixture: ComponentFixture<ArticleInputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInputDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
