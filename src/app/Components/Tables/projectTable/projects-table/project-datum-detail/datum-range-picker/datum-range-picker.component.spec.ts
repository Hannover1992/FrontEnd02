import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatumRangePickerComponent } from './datum-range-picker.component';

describe('DatumRangePickerComponent', () => {
  let component: DatumRangePickerComponent;
  let fixture: ComponentFixture<DatumRangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatumRangePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatumRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
