import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProjectComponent } from './project.component';
import {HttpClientModule} from "@angular/common/http";
import {ProjectService} from "../service/project.service";
import {AppComponent} from "../../app.component";
// test commit
describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let projectService: ProjectService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ ProjectComponent,
        AppComponent],
      providers: [ProjectService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    projectService = TestBed.inject(ProjectService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test fi the roject service get injected' , () => {
    expect(projectService).toBeTruthy();
  });

  it(' test if this.project is defined', () => {
    expect(component.project).toBeDefined();
  });
});
