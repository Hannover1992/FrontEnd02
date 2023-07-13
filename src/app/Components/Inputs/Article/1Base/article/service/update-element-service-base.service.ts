import { Injectable } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";

@Injectable({
  providedIn: 'root'
})
export abstract class UpdateElementServiceBaseService {
  projectArticle: ProjectArticle | undefined;
  isActive: boolean = false;

  constructor() { }

  activate(element: any) {
    this.projectArticle = this.convertArticle(element);
    this.projectArticle = this.setExtendConvert(element, this.projectArticle);
    this.isActive = true;
  }


  deactivate() {
    console.log("es wurde deaktiviert")
    this.projectArticle = undefined;
    this.isActive = false;
  }

  isActivated() {
    return this.isActive;
  }

  getMenge() {
    return this.projectArticle?.menge;
  }

  getProjectArticle() {
    return this.projectArticle;
  }

  getArticle() {
    return this.projectArticle?.artikel;
  }

  convertArticle(tableObject: any): any {

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
        "unterkategorie_id": tableObject.unterkategorie_id
      }
    }
    return projectArticle;
  }


  // abstract getExtend(): any;
  abstract setExtendConvert(tableObject: any, projectArticle: any): any ;
}
