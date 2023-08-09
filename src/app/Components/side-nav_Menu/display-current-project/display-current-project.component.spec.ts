import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrentProjectComponent } from './display-current-project.component';

describe('DisplayCurrentProjectComponent', () => {
  let component: DisplayCurrentProjectComponent;
  let fixture: ComponentFixture<DisplayCurrentProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCurrentProjectComponent]
    });
    fixture = TestBed.createComponent(DisplayCurrentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
