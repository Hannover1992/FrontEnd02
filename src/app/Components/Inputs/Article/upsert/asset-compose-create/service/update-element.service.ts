import {Inject, Injectable} from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

enum Mode {
  DEFAULT,
  UPDATE
}


@Injectable({
  providedIn: 'root'
})
export class UpdateElementService {
  element: ProjectArticle | undefined;
  mode: Mode = Mode.DEFAULT;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
  ) {
    this.element = this.data.element;
    this.mode = Mode.UPDATE;
  }

  activate() {
    this.element = this.data.element;
    this.mode = Mode.UPDATE;
  }

  deactivate(){
    this.mode = Mode.DEFAULT;
    this.element = undefined;
  }

  isActivated() {
    return this.mode == Mode.UPDATE;
  }

  setMode(mode: Mode) {
    this.mode = mode;
  }

  setElement(element: ProjectArticle) {
    this.element = element;
  }

  getMode() {
    return this.mode;
  }

  getElement() {
    return this.element;
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
