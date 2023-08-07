import {Component, Input} from '@angular/core';
import {Kategorie} from "../kategorie";
import {KategorienWithSubkategorienService} from "../../../Services/kategorien-with-subkategorien.service";
import {Router} from "@angular/router";
import {ServiceAccessTokenService} from "../../user/service/service-access-token.service";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-expension-panell-kategorie',
  templateUrl: './expension-panell-kategorie.component.html',
  styleUrls: ['./expension-panell-kategorie.component.css']
})
export class ExpensionPanellKategorieComponent {

  @Input() drawerRef!: MatDrawer;

  kategory : Kategorie[] = [];
  panelOpenState = false;
  kategory_observeble : any;

  constructor(private kategorie_service : KategorienWithSubkategorienService,
              private router: Router,
              private serviceAccessTokenService:ServiceAccessTokenService
              ) {
    this.kategory_observeble = this.kategorie_service.getKategorienWithSubkategorien()
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
      (data) => {
        this.kategory = data as Kategorie[];
      }
    )
  }




  logout() {
    // Clear local and session storage
    localStorage.clear();
    sessionStorage.clear();
    this.serviceAccessTokenService.logout();


    this.router.navigate(['/login']);
  }
}
