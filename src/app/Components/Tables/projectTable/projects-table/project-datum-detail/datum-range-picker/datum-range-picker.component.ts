import { Component, Input } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-datum-range-picker',
  templateUrl: './datum-range-picker.component.html',
  styleUrls: ['./datum-range-picker.component.css']
})
export class DatumRangePickerComponent {
  @Input() Startdatum     :Date;
  @Input() Endtermin      :Date;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor() {
    this.Startdatum = new Date(1992);
    this.Endtermin = new Date(1992);
    this.range = new FormGroup({
      start: new FormControl<Date | null>(this.Startdatum),
      end: new FormControl<Date | null>(this.Endtermin),
    });
  }

  updateCalcs() {
    
  }
}
