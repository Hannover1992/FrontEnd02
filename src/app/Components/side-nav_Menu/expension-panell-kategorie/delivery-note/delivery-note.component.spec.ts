import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryNoteComponent } from './delivery-note.component';

describe('DeliveryNoteComponent', () => {
  let component: DeliveryNoteComponent;
  let fixture: ComponentFixture<DeliveryNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryNoteComponent]
    });
    fixture = TestBed.createComponent(DeliveryNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
