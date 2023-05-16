import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAuftragsDetailComponent } from './project-auftrags-detail.component';

describe('ProjectAuftragsDetailComponent', () => {
  let component: ProjectAuftragsDetailComponent;
  let fixture: ComponentFixture<ProjectAuftragsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAuftragsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAuftragsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
