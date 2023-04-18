import {Component} from '@angular/core';
import {KategorienWithSubkategorienService} from "../service/kategorien-with-subkategorien.service";
import {Kategorie} from "../kategorie";


@Component({
  selector: 'app-kategorie-subkategorie',
  templateUrl: './kategorie-subkategorie.component.html',
  styleUrls: ['./kategorie-subkategorie.component.css']
})
export class KategorieSubkategorieComponent {
  kategory : Kategorie[] = [];
  kategory_observabel : any;

constructor(private kategorie_service : KategorienWithSubkategorienService) {
  this.getKategorieWithSubkategorie();
  this.kategory_observabel = this.kategorie_service.getKategorienWithSubkategorien()
}

  getKategorieWithSubkategorie() {
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
      (data) => {
        this.kategory = data as Kategorie[];
        console.log(this.kategory);
      }
    )
  }


}
