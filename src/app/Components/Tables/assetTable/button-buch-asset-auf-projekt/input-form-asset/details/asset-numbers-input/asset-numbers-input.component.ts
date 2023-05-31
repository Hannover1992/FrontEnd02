import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-asset-numbers-input',
  templateUrl: './asset-numbers-input.component.html',
  styleUrls: ['./asset-numbers-input.component.css']
})
export class AssetNumbersInputComponent {
  @Input() asset_numbers!: FormGroup;

  constructor() {
  }

}
