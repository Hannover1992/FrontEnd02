import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDatumComponent } from './project-datum.component';

describe('ProjectDatumComponent', () => {
  let component: ProjectDatumComponent;
  let fixture: ComponentFixture<ProjectDatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDatumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
