import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AcuTableService} from "../../../../../Services/Article/specialization/acu-table.service";

@Component({
  selector: 'app-dialog-delete-acu',
  templateUrl: './dialog-delete-acu.component.html',
  styleUrls: ['./dialog-delete-acu.component.css']
})
export class DialogDeleteAcuComponent {
  public acu!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private acuTableService: AcuTableService
  ) {
    this.acu = data;
  }

  delete(): void {
    this.acuTableService.delete(this.acu);
  }
}
