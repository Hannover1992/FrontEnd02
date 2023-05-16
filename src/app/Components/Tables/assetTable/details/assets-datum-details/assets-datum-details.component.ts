import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-assets-datum-details',
  templateUrl: './assets-datum-details.component.html',
  styleUrls: ['./assets-datum-details.component.css']
})
export class AssetsDatumDetailsComponent {
  @Input() einkaufs_datum: Date;
  @Input() belegt_von: Date;
  @Input() belegt_bis: Date;
  @Input() edit_date: Date;

  constructor() {
    this.einkaufs_datum = new Date(2222);
    this.belegt_von = new Date(2222);
    this.belegt_bis = new Date(2222);
    this.edit_date = new Date(2222);
  }
}
