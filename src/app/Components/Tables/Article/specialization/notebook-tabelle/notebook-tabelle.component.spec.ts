import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookTabelleComponent } from './notebook-tabelle.component';

describe('NotebookTabelleComponent', () => {
  let component: NotebookTabelleComponent;
  let fixture: ComponentFixture<NotebookTabelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookTabelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookTabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
