import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-article-numbers-input',
  templateUrl: './article-numbers-input.component.html',
  styleUrls: ['../../../../../../../../shared_css/input.css']
})
export class ArticleNumbersInputComponent {
  @Input() article_numbers!: FormGroup;

  constructor() {
  }

}
