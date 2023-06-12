import {Component, ContentChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-vater',
  templateUrl: './vater.component.html',
  styleUrls: ['./vater.component.css']
})
export class VaterComponent {

  //some list of names
  names = ['John', 'Doe', 'Jane', 'Doe'];

  @ContentChild('content') content!: TemplateRef<any>;

}
