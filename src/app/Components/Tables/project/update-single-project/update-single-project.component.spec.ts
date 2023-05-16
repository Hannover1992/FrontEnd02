import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSingleProjectComponent } from './update-single-project.component';

describe('UpdateSingleProjectComponent', () => {
  let component: UpdateSingleProjectComponent;
  let fixture: ComponentFixture<UpdateSingleProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSingleProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSingleProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
