import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectErfolgreichDialogComponent } from './project-erfolgreich-dialog.component';

describe('ProjectErfolgreichDialogComponent', () => {
  let component: ProjectErfolgreichDialogComponent;
  let fixture: ComponentFixture<ProjectErfolgreichDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectErfolgreichDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectErfolgreichDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
