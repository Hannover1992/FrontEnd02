import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-asset-detals-compose',
  templateUrl: './asset-detals-compose.component.html',
  styleUrls: ['./asset-detals-compose.component.css']
})
export class AssetDetalsComposeComponent {
  @Input() element: any;
}
