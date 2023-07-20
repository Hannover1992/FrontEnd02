import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simkarten-details-compose',
  templateUrl: './simkarten-details-compose.component.html',
  styleUrls: ['../../table.css','../../../../../../shared_css/table_details.css' ]
})
export class SimkartenDetailsComposeComponent {

  @Input() element: any;

}
