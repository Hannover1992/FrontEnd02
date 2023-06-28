import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-article-input-date',
  templateUrl: './article-input-date.component.html',
  styleUrls: ['../../../../../../../../../shared_css/input.css']
})

export class ArticleInputDateComponent {
  @Input() article_dates!: FormGroup;

  constructor() {}

}
