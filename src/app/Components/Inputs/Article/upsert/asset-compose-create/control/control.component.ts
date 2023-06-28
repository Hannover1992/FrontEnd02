import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {UnterKategorieService} from "../../../../../../Services/unter-kategorie.service";
import {ProjectsService} from "../../../../../Tables/projectTable/service/projects.service";
import {ProjectArticleDataService} from "../service/project-article-data.service";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {UpdateElementService} from "../service/update-element.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['../../../../../../shared_css/input.css'],
  providers: [ProjectArticleDataService]
})
export class ControlComponent {


  //toDo: dass passt, da die Form getrennt von den Eigentlichen Artikeln, und ProjectArticeln sind
  //toDO: so werden es 3 Schritte.
  //toDo; als ersters, get the current data from asset form create Asset
  //toDO; get current Data from Article Form and Create ARticle
  //toDo: get current Data from ProjectArticle Form and Create ProjectArticle
  //toDo: the submite
  constructor(
    private projectArticleData:ProjectArticleDataService,
    private assetTableService:AssetTableService,
    private updateElementService: UpdateElementService,
  ){
  }

  onSubmit() {
    // console.log(this.projectArticleData.formatToProjectArticle());
    if(this.updateElementService.isActivated()){
      this.assetTableService.update_asset(this.projectArticleData.formatToProjectArticleUpdate());
      this.updateElementService.deactivate();
    } else {
      console.log("ich bin in create Submite")
      // this.assetTableService.create_new_asset(this.projectArticleData.formatToProjectArticleCreate());
      console.log(this.projectArticleData.formatToProjectArticleCreate());
    }
  }

  close_window() {

  }
  //toDo: Serriennummer Spinnt

}
