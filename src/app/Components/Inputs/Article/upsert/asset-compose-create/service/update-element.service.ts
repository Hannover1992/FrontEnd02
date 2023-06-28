import {Inject, Injectable, Optional} from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


@Injectable({
  providedIn: 'root'
})
export class UpdateElementService {
  projectArticle: ProjectArticle | undefined;
  isActive: boolean = false;

  constructor(
  ) {
  }

  activate(element: any) {
    this.projectArticle = this.convertTemplate(element);
    this.isActive = true;
    console.log("es wurde aktiviert")
  }

  deactivate(){
    console.log("es wurde deaktiviert")
    this.projectArticle = undefined;
    this.isActive = false;
  }

  isActivated() {
    return this.isActive;
  }

  getMenge(){
    return this.projectArticle?.menge;
  }

  getProjectArticle() {
    return this.projectArticle;
  }

  getArticle(){
    return this.projectArticle?.artikel;
  }

  convertTemplate(tableObject: any): any {
    let projectArticle : ProjectArticle = {
      "projekt_artikel_id": tableObject.projekt_artikel_id,
      "projekt_id": tableObject.projekt_id,
      "artikel_id": tableObject.artikel_id,
      "menge": tableObject.menge,
      "artikel": {
        "firma": tableObject.firma,
        "artikelname": tableObject.artikelname,
        "model": tableObject.model,
        "zustand": tableObject.zustand,
        "beschreibung": tableObject.beschreibung,
        "preis": tableObject.preis,
        "anlagenummer": tableObject.anlagenummer,
        "seriennummer": tableObject.seriennummer,
        "einkaufs_datum": tableObject.einkaufs_datum,
        "edit_date": tableObject.edit_date,
        "belegt_von": tableObject.belegt_von,
        "belegt_bis": tableObject.belegt_bis,
        "assets": {
          "ID": tableObject.asset_id,
          "Inventarnummer": tableObject.Inventarnummer,
        },
        "unterkategorie_id": tableObject.unterkategorie_id
      }
    }
    return projectArticle;
  }

}
