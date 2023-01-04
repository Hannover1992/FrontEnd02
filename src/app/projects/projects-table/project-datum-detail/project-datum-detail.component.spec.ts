import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDatumDetailComponent } from './project-datum-detail.component';

describe('ProjectDatumDetailComponent', () => {
  let component: ProjectDatumDetailComponent;
  let fixture: ComponentFixture<ProjectDatumDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDatumDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDatumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
