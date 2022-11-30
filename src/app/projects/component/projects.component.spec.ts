import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import {HttpClientModule} from "@angular/common/http";

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports : [HttpClientModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test if the projects array is defined', () => {
    expect(component.projects).toBeDefined();
  });

  it(' check if the project service is injected',  (done) => {
    expect(component.projectsService).toBeTruthy();
    expect(component.projectsService.projects).toBeDefined();
    component.projects_observable.subscribe((value) => {
      expect(value.length).toEqual(10);
      expect(value[1].ID).toEqual(1);
      expect(value[1].Standort).toEqual("Standort1");
      expect(value.length).toEqual(10);
    });
    component.getProjects().add(
      () => {
        expect(component.projects.length).toEqual(10);
        expect(component.projects[1].ID).toEqual(1);
        expect(component.projects[1].Standort).toEqual("Standort1");
        expect(component.projects.length).toEqual(10);
        done();
      }
    )

  });

});
