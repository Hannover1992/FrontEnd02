import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDropDownMenuComponent } from './project-drop-down-menu.component';

describe('ProjectDropDownMenuComponent', () => {
  let component: ProjectDropDownMenuComponent;
  let fixture: ComponentFixture<ProjectDropDownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDropDownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDropDownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
