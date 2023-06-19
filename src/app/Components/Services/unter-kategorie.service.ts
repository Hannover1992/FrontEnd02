import { Injectable } from '@angular/core';
import {BehaviorSubject, filter} from "rxjs";
import {NavigationEnd, ActivatedRoute, Router} from "@angular/router";
import {KategorienWithSubkategorienService} from "./kategorien-with-subkategorien.service";

@Injectable({
  providedIn: 'root'
})

export class UnterKategorieService {

  selectedUnterKategorie: BehaviorSubject<string> = new BehaviorSubject('Verkehrstechnik');
  selectedUnterKategorieId: BehaviorSubject<number> = new BehaviorSubject(666);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public kategorienWithSubkategorienService: KategorienWithSubkategorienService
  ) {
    this.get_the_current_unterkategorie_from_router_state();
  }

  private get_the_current_unterkategorie_from_router_state() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const navigationState = this.router.getCurrentNavigation();
        if (navigationState && navigationState.extras.state) {
          let router_unterkategorie = navigationState.extras.state['unterkategoriename'];
          let router_unterkategorie_id = navigationState.extras.state['unterkategorie_id'];
          this.selectedUnterKategorie.next(router_unterkategorie);
          this.selectedUnterKategorieId.next(router_unterkategorie_id);
          console.log(this.selectedUnterKategorieId.value)
        }
      });
  }


}
