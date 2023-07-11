import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simkarten-details-compose',
  templateUrl: './simkarten-details-compose.component.html',
  styleUrls: ['./simkarten-details-compose.component.css']
})
export class SimkartenDetailsComposeComponent {

  @Input() element: any;

}
