import {Component, Input} from '@angular/core';
import {Kategorie} from "../kategorie";
import {KategorienWithSubkategorienService} from "../../../Services/kategorien-with-subkategorien.service";
import {Router} from "@angular/router";
import {ServiceAccessTokenService} from "../../user/service/service-access-token.service";
import {MatDrawer} from "@angular/material/sidenav";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-expension-panell-kategorie',
  templateUrl: './expension-panell-kategorie.component.html',
  styleUrls: ['./expension-panell-kategorie.component.css']
})
export class ExpensionPanellKategorieComponent {

  @Input() drawerRef!: MatDrawer;

  kategory : Kategorie[] = [];
  kategory_observeble : any;

  constructor(
    private kategorie_service : KategorienWithSubkategorienService,
    private serviceAccessTokenService:ServiceAccessTokenService
              ) {
    this.kategory_observeble = this.kategorie_service.getKategorienWithSubkategorien()
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
      (data) => {
        this.kategory = data as Kategorie[];
      }
    )
  }

  kategory_transision(kategory_name: string): void {
    this.drawerRef.toggle();
    this.kategorie_service.current_kategory_name = kategory_name;
  }

  logout() {
    this.serviceAccessTokenService.logout();
  }
}
