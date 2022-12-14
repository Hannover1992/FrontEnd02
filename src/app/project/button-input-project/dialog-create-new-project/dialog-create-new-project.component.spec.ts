import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateNewProjectComponent } from './dialog-create-new-project.component';

describe('DialogCreateNewProjectComponent', () => {
  let component: DialogCreateNewProjectComponent;
  let fixture: ComponentFixture<DialogCreateNewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateNewProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
