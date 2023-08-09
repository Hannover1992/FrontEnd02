import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverNoteButtonComponent } from './deliver-note-button.component';

describe('DeliverNoteButtonComponent', () => {
  let component: DeliverNoteButtonComponent;
  let fixture: ComponentFixture<DeliverNoteButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverNoteButtonComponent]
    });
    fixture = TestBed.createComponent(DeliverNoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
