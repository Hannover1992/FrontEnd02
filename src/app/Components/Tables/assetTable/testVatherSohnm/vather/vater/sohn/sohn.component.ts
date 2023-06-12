import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sohn',
  templateUrl: './sohn.component.html',
  styleUrls: ['./sohn.component.css']
})
export class SohnComponent {
  @Input() currentName = '';

}
