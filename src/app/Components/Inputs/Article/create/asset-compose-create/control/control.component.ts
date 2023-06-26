import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {ProjectAssetArticle} from "../../../old/Specialization/asset/asset-compose/services/project-asset-article";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['../../../../../shared_css/input.css'],
})
export class ControlComponent {


  constructor(
      private projectAssetArticle: ProjectAssetArticle,
      private unterKategorieService:UnterKategorieService
  ){




  }

  onSubmit() {
    let projectArticle : ProjectArticle = this.projectAssetArticle.projectAssetArticle.getValue();
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();

  }

  close_window() {
      //

  }

}
