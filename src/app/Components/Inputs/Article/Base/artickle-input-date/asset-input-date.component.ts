import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-asset-input-date',
  templateUrl: './asset-input-date.component.html',
  styleUrls: ['../../../../Tables/shared_css/input.css']
})

export class AssetInputDateComponent {
  @Input() asset_dates!: FormGroup;

  constructor() {}

}