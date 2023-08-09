import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectDisplayComponent } from './current-project-display.component';

describe('CurrentProjectDisplayComponent', () => {
  let component: CurrentProjectDisplayComponent;
  let fixture: ComponentFixture<CurrentProjectDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentProjectDisplayComponent]
    });
    fixture = TestBed.createComponent(CurrentProjectDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
