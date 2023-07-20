import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AssetTableService} from "../../../../../../Services/Article/specialization/asset-table.service";
import {SimkartenTableService} from "../../../../../../Services/Article/specialization/simkarten-table.service";

@Component({
  selector: 'app-dialog-delete-simkarten',
  templateUrl: './dialog-delete-simkarten.component.html',
  styleUrls: ['./dialog-delete-simkarten.component.css']
})
export class DialogDeleteSimkartenComponent {

  simkarte!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private simkarteTableService: SimkartenTableService
  ) {
    this.simkarte = data;
  }

  delete(){
    this.simkarteTableService.delete(this.simkarte);
  }

}

