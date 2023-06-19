import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-asset-input-date',
  templateUrl: './article-input-date.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})

export class ArticleInputDateComponent {
  @Input() asset_dates!: FormGroup;

  constructor() {}

}
