import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-acu-detail',
  templateUrl: './acu-detail.component.html',
  styleUrls: ['../../table.css','../../../../../../shared_css/table_details.css' ]
})
export class AcuDetailComponent {

  @Input() element: any;

}
