import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnterKategorieComponent } from './unter-kategorie.component';

describe('UnterKategorieComponent', () => {
  let component: UnterKategorieComponent;
  let fixture: ComponentFixture<UnterKategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnterKategorieComponent]
    });
    fixture = TestBed.createComponent(UnterKategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
