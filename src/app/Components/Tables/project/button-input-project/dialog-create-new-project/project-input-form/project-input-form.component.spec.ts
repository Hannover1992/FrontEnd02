import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { ProjectInputFormComponent } from './project-input-form.component';

describe('ProjectInputFormComponent', () => {
  let component: ProjectInputFormComponent;
  let fixture: ComponentFixture<ProjectInputFormComponent>;
  let debugElement: any;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInputFormComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectInputFormComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  }));


  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it(' should be able to delete a project', () => {
    expect(component).toBeTruthy();
    component.onSubmit();
  });







});
