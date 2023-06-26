import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../../../Interface/projectArticle";
import {AssetTableService} from "../../../../../../../Services/asset-table.service";
import {ProjectAssetArticle} from "../services/project-asset-article";
import {UnterKategorieService} from "../../../../../../../Services/unter-kategorie.service";
import {ArticleData} from "../../../../Base/service/article-data.service";
import {Article} from "../../../../../../../Interface/article";
import {Asset} from "../../../../../../../Interface/asset";

@Component({
  selector: 'app-asset-input-buttons',
  templateUrl: './asset-input-buttons.component.html',
  styleUrls: ['../../../../../../../shared_css/input.css']
})
export class AssetInputButtonsComponent {

  //toDo: when the user clcks the button, the window should close, and the service shoudl be loaded to standart data
  //toDo: Beschreibugn soll auch als ein eingabe feld sein

  constructor(



    private assetTableService:        AssetTableService,

    private artikelFormDataService:   ArticleData,
    private projectAssetArticle:      ProjectAssetArticle,

    private unterKategorieService:    UnterKategorieService,
  ) {

  }

    onSubmit() {
      let projectArticle : ProjectArticle = this.projectAssetArticle.projectAssetArticle.getValue();

      // @ts-ignore
      projectArticle.artikel.unterkategorie_id = this.getUnterkategorieID();
      console.log("this is how the object looks like when he has to be send to the server")
      console.log(projectArticle)
      if(this.check_if_form_is_valid()){
        let temp: ProjectArticle = this.transformTypeAtoTypeB(projectArticle);
        this.assetTableService.create_new_asset(temp);
        this.artikelFormDataService.restart();
        this.projectAssetArticle.restart();
      }


  }

  transformTypeAtoTypeB(typeA: any): ProjectArticle  {
    // Ensure typeA has the necessary structure
    if (!typeA?.artikel?.assets || !typeA?.artikel?.asset_details || !typeA?.artikel?.asset_numbers || !typeA?.artikel?.date_info) {
      console.error("Invalid typeA object.");
    }

    // Create the Asset object
    let asset: Asset = {
      ID: parseInt(typeA.artikel.assets.ID ?? ""),
      Inventarnummer: parseInt(typeA.artikel.assets.Inventarnummer ?? ""),
    };

    // Create the Article object
    let article: Article = {
      artikelname: typeA.artikel.asset_details.artikelname,
      firma: typeA.artikel.asset_details.firma,
      model: typeA.artikel.asset_details.model,
      unterkategorie_id: typeA.artikel.unterkategorie_id,
      // preis: parseInt(typeA.artikel.asset_numbers.preis ? "0" : "0"),
      preis: typeA.artikel.asset_numbers.preis ? Number(typeA.artikel.asset_numbers.preis) : 0,
      // return control && control.value ? Number(control.value) : 0;
      beschreibung: typeA.artikel.asset_details.beschreibung,
      zustand: typeA.artikel.asset_details.zustand,
      einkaufs_datum: typeA.artikel.date_info.einkaufs_datum,
      belegt_von: typeA.artikel.date_info.belegt_von,
      belegt_bis: typeA.artikel.date_info.belegt_bis,
      edit_date: typeA.artikel.date_info.edit_date,
      seriennummer: typeA.artikel.asset_numbers.serriennummer,
      anlagenummer: typeA.artikel.asset_numbers.anlagenummer,
      assets: asset,
    };

    // Create the ProjectArticle object
    let projectArticle: ProjectArticle = {
      projekt_artikel_id: typeA.projekt_artikel_id,
      projekt_id: typeA.projekt_id,
      menge: typeA.menge ? Number(typeA.menge) : 1,
      artikel: article,
    };

    console.log("damit fange ich an und das ist das ergebnis")
    console.log(typeA)
    console.log(projectArticle)
    return projectArticle;
  }

  check_if_form_is_valid(): boolean {

    let valid = this.artikelFormDataService.artikelFormValid.getValue();
    console.log("The form is Valid?:")
    console.log(valid);
    return valid;
  }

  //toDo: ein problem is es dass der Serien numme rnich updatet wird.
  //toDo: jetzt wenn ich die update mache so wird es eintlich create ausgefuhrt. get ride of this vehatlen.

  private getUnterkategorieID(): number {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    if (!unterkategorieID) {
      throw new Error('unterkategorieID is null');
    }
    return unterkategorieID;
  }

  close_window() {
    this.artikelFormDataService.restart();
    this.projectAssetArticle.restart();
  }
}
