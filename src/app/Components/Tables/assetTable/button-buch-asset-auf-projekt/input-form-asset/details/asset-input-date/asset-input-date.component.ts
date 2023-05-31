import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-asset-input-date',
  templateUrl: './asset-input-date.component.html',
  styleUrls: ['./asset-input-date.component.css']
})

export class AssetInputDateComponent {
  @Input() asset_dates: FormGroup;

  constructor( private fb: FormBuilder) {
    this.asset_dates = this.fb.group({ })
  }

}
