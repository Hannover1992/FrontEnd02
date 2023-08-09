import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-kategorie-name-buttons',
  templateUrl: './kategorie-name-buttons.component.html',
  styleUrls: ['./kategorie-name-buttons.component.css']
})
export class KategorieNameButtonsComponent {

  @Input() kategorie: any;
}
