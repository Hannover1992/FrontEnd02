import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-handy-detail',
  templateUrl: './handy-detail.component.html',
  styleUrls: ['../../table.css','../../../../../../shared_css/table_details.css' ]
})
export class HandyDetailComponent {

  @Input() element: any;
  hidePassword: boolean = true;

}
