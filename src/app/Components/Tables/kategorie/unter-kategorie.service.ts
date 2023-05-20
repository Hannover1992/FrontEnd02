import { Injectable } from '@angular/core';
import {BehaviorSubject, filter} from "rxjs";
import {NavigationEnd, ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UnterKategorieService {

  selectedUnterKategorie: BehaviorSubject<string> = new BehaviorSubject('Verkehrstechnik');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.get_the_current_unterkategorie_from_router_state();
  }


  private get_the_current_unterkategorie_from_router_state() {
    let router_status;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const navigationState = this.router.getCurrentNavigation();
        if (navigationState && navigationState.extras.state) {
          router_status = navigationState.extras.state['unterkategoriename'];
          this.selectedUnterKategorie.next(router_status);
        }
      });
  }

  private get_the_unterkategorie_id_from_database_given_the_unterkategorie_name(unterkategorie_name: string) {

  }

}
