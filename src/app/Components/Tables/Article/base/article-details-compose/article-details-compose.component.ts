import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-article-details-compose',
  templateUrl: './article-details-compose.component.html',
  styleUrls: ['../../../../../shared_css/table_details.css' ]
})
export class ArticleDetailsComposeComponent {
  @Input() element: any;

}
