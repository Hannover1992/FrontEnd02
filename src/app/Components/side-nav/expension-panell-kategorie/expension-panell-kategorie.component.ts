import { Component } from '@angular/core';
import {Kategorie} from "../kategorie";
import {KategorienWithSubkategorienService} from "../service/kategorien-with-subkategorien.service";

@Component({
  selector: 'app-expension-panell-kategorie',
  templateUrl: './expension-panell-kategorie.component.html',
  styleUrls: ['./expension-panell-kategorie.component.css']
})
export class ExpensionPanellKategorieComponent {

  kategory : Kategorie[] = [];
  panelOpenState = false;
  kategory_observeble : any;

  constructor(private kategorie_service : KategorienWithSubkategorienService) {
    this.kategory_observeble = this.kategorie_service.getKategorienWithSubkategorien()
  }

  // getKategorieWithSubkategorie() {
  //   this.kategorie_service.getKategorienWithSubkategorien().subscribe(
  //     (data) => {
  //       this.kategory = data as Kategorie[];
  //       console.log(this.kategory);
  //     }
  //   )
  // }
}
