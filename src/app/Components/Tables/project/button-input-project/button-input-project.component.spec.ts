import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInputProjectComponent } from './button-input-project.component';

describe('ButtonInputProjectComponent', () => {
  let component: ButtonInputProjectComponent;
  let fixture: ComponentFixture<ButtonInputProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonInputProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonInputProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
