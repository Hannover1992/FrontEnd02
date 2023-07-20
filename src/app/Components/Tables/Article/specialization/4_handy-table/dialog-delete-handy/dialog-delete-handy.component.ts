import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HandyTableService} from "../../../../../../Services/Article/specialization/handy-table.service";

@Component({
  selector: 'app-dialog-delete-handy',
  templateUrl: './dialog-delete-handy.component.html',
  styleUrls: ['./dialog-delete-handy.component.css']
})
export class DialogDeleteHandyComponent {

  handy!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private handyTableService: HandyTableService) // Use HandyTableService here
  {
    this.handy = data;
  }

  delete(){
    this.handyTableService.delete(this.handy); // Call delete method on HandyTableService
  }
}
