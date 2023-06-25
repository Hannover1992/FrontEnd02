import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {ProjectAssetArticle} from "../services/project-asset-article";
import {UnterKategorieService} from "../../../../../../Services/unter-kategorie.service";
import {ArtikelFormDataService} from "../../../../Base/service/artikel-form-data.service";

@Component({
  selector: 'app-asset-input-buttons',
  templateUrl: './asset-input-buttons.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class AssetInputButtonsComponent {

  //toDo: when the user clcks the button, the window should close, and the service shoudl be loaded to standart data
  //toDo: Beschreibugn soll auch als ein eingabe feld sein

  constructor(


    private artikelFormDataService:   ArtikelFormDataService,

    private assetTableService: AssetTableService,

    private projectAssetArticle:ProjectAssetArticle,

    private unterKategorieService: UnterKategorieService,
  ) {

  }

    onSubmit() {
      let projectArticle : ProjectArticle = this.projectAssetArticle.projectAssetArticle.getValue();

      // @ts-ignore
      projectArticle.artikel.unterkategorie_id = this.getUnterkategorieID();
      console.log("this is how the object looks like when he has to be send to the server")
      console.log(projectArticle)
      if(this.check_if_form_is_valid()){
        this.assetTableService.create_new_asset(projectArticle);
      }

  }

  check_if_form_is_valid(): boolean {
    let temp =  this.artikelFormDataService.articleForm.getValue().valid;
    console.log(temp);
    return temp;
  }


  private getUnterkategorieID(): number {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    if (!unterkategorieID) {
      throw new Error('unterkategorieID is null');
    }
    return unterkategorieID;
  }
}
