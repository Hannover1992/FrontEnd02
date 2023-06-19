import { Component } from '@angular/core';
import {Kategorie} from "../kategorie";
import {KategorienWithSubkategorienService} from "../../Services/kategorien-with-subkategorien.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expension-panell-kategorie',
  templateUrl: './expension-panell-kategorie.component.html',
  styleUrls: ['./expension-panell-kategorie.component.css']
})
export class ExpensionPanellKategorieComponent {

  kategory : Kategorie[] = [];
  panelOpenState = false;
  kategory_observeble : any;

  constructor(private kategorie_service : KategorienWithSubkategorienService, private router: Router) {
    this.kategory_observeble = this.kategorie_service.getKategorienWithSubkategorien()
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
      (data) => {
        this.kategory = data as Kategorie[];
      }
    )
  }
}
