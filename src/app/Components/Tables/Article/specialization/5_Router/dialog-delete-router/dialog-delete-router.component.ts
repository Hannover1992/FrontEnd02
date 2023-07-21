import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {RouterTableService} from "../../../../../../Services/Article/specialization/router-table.service";

@Component({
  selector: 'app-dialog-delete-router',
  templateUrl: './dialog-delete-router.component.html',
  styleUrls: ['./dialog-delete-router.component.css']
})
export class DialogDeleteRouterComponent {

  router!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private TableService: RouterTableService
  ) {
    this.router = data;
  }

  delete(){
    this.TableService.delete(this.router);
  }

}
