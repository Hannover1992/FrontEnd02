import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-router-detail',
  templateUrl: './router-detail.component.html',
  styleUrls: ['../../table.css','../../../../../../shared_css/table_details.css' ]
})
export class RouterDetailComponent {

  @Input() element: any;
  hidePassword: boolean = true;

}
