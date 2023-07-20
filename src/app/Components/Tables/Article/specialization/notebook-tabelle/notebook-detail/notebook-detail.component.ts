import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['../../table.css','../../../../../../shared_css/table_details.css' ]
})
export class NotebookDetailComponent {


  @Input() element: any;

}
