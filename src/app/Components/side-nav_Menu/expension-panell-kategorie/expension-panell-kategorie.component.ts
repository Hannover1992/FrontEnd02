import { Component } from '@angular/core';
import {Kategorie} from "../kategorie";
import {KategorienWithSubkategorienService} from "../service/kategorien-with-subkategorien.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-expension-panell-kategorie',
  templateUrl: './expension-panell-kategorie.component.html',
  styleUrls: ['./expension-panell-kategorie.component.css']
})
export class ExpensionPanellKategorieComponent {
  //toDo: Verandere die <p> zu schon aussehenden Button,

  kategory : Kategorie[] = [];
  panelOpenState = false;
  kategory_observeble : any;

  constructor(private kategorie_service : KategorienWithSubkategorienService, private router: Router) {
    this.kategory_observeble = this.kategorie_service.getKategorienWithSubkategorien()
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
      (data) => {
        this.kategory = data as Kategorie[];
        console.log(this.kategory)
      }
    )
  }


  // onButtonClick(kategoriename: string, unterkategoriename: string) {
  //   // Ihre Logik hier
  //   console.log('Button clicked:', kategoriename, unterkategoriename);
  //
  //   // Navigieren Sie zur gewünschten Route und übergeben Sie den State
  //   this.router.navigate(
  //     ['/', kategoriename],
  //     { state: { unterkategoriename: unterkategoriename } }
  //   );
  // }
}
