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
        }
      });
  }




//   this.app.get('/getCorrespondingId/:kategoriename', async (req: any, res: any) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const kategoriename = req.params.kategoriename;
//
//   await this.prisma.kategorien.findMany({
//                                           where: {
//                                             kategoriename: kategoriename
//                                           }
//                                         }).then((kategorie: any) => {
//   res.status(200).send(kategorie.id);
// }).catch((error: any) => {
//   res.status(500).send({"message": error.message});
// });
// });


  getUnterKategorieID(selected_unterkategorie: string) {
    console.log(this.kategorienWithSubkategorienService.getKategorienWithSubkategorien());
    return 666;
  //   toDo: ok ich habe ien kleines poroblen , nahmlichi ch habe das nach string ausgri
  //   die subkategorie, doch jetzt uber schenid sie sich und das ist schlech und ein schlechtes
  //   design. Ich muss dass alls ganzes nur fur subkategorie ID, machen und nicht fur string


  }
}
