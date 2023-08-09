import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-unter-kategorie',
  templateUrl: './unter-kategorie.component.html',
  styleUrls: ['./unter-kategorie.component.css']
})
export class UnterKategorieComponent {

  @Input() subkategorie: any;
}
