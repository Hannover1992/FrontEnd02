import {Component, Inject, OnInit} from '@angular/core';
import {ProjectArticle} from "../../../../../../../Interface/projectArticle";
import {ProjectAssetArticle} from "./services/project-asset-article";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";


enum Mode {
  create = 'default',
  update = 'update'
}

@Component({
  selector: 'app-asset-compose',
  templateUrl: './asset-compose.component.html',
  styleUrls: ['./asset-compose.component.css']
})


export class AssetComposeComponent implements OnInit {
  element!: ProjectArticle;
  mode!: Mode;



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private projectAssetArticle:ProjectAssetArticle,
              ) {
    this.mode = this.data.mode;
  }

  ngOnInit(): void {
    if(this.data == undefined){
    } else {
      this.element = this.data.element;
      let projectArticle = this.convertTemplate(this.element);
      // this.projectAssetArticle.rekursivSetzen(projectArticle);
    }
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
