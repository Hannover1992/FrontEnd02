import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProjectComponent } from './project.component';
import {HttpClientModule} from "@angular/common/http";
import {ProjectSService} from "../Services/project-s.service";
// test commit
describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let projectService: ProjectSService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ ProjectComponent ],
      providers: [ProjectSService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    projectService = TestBed.inject(ProjectSService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test fi the project service get injected' , () => {
    expect(projectService).toBeTruthy();
  });

});
