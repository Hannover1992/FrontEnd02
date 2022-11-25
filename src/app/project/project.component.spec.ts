import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should have a button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Get Project');
  });
  it('  the button has a click event', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').click).toBeTruthy();
  });
  it(' the button with the text Get Project call a functino getProject()', () => {
    // const button = fixture.debugElement.query(By.css('button')).nativeElement;
    // button.click();
    // fixture.detectChanges();
  });
});

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' some simple staff i wannt that the page have a h1 titile with name project', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Project');
  });

  it(' should have a button with text Get Project', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#project_button');
    expect(btn.innerHTML).toContain('Get Project');
  });

  it(' try to emulate the click event on the button', () => {
    expect(component.project).toContain('empty');
    const btn = fixture.debugElement.nativeElement.querySelector('#project_button');
    expect(btn.innerHTML).toContain('Get Project');
    component.getProject();
    expect(component.project).toContain('some project');
  });



});
