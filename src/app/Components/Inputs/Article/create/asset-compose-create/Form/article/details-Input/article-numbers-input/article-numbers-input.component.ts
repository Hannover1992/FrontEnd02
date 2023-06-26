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
    this.article_numbers = new FormGroup<any>({})
    this.article_numbers.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

}
