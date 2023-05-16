import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFilterComponentComponent } from './project-filter-component.component';

describe('ProjectFilterComponentComponent', () => {
  let component: ProjectFilterComponentComponent;
  let fixture: ComponentFixture<ProjectFilterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFilterComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFilterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
