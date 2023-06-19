import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-asset-numbers-input',
  templateUrl: './article-numbers-input.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class ArticleNumbersInputComponent {
  @Input() asset_numbers!: FormGroup;

  constructor() {}

}
