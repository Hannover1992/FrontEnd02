import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssetsDetailComponent } from './project-assets-detail.component';

describe('ProjectAssetsDetailComponent', () => {
  let component: ProjectAssetsDetailComponent;
  let fixture: ComponentFixture<ProjectAssetsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAssetsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAssetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
