import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-asset-spec',
  templateUrl: './asset-spec.component.html',
  styleUrls: ['./asset-spec.component.css']
})
export class AssetSpecComponent {

  @Input() currentName: any;

}
