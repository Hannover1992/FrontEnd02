import {Component, Input} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {KategorienWithSubkategorienService} from "../../../../Services/kategorien-with-subkategorien.service";
import {Kategorie} from "../../kategorie";

@Component({
  selector: 'app-unter-kategorie-buttons',
  templateUrl: './unter-kategorie-buttons.component.html',
  styleUrls: ['./unter-kategorie-buttons.component.css']
})

export class UnterKategorieButtonsComponent {

  @Input() drawerRef:   any;
  kategory_observeble: any;

  kategory : Kategorie[] = [];
  constructor(
      private kategorie_service : KategorienWithSubkategorienService,
  ) {
    this.kategory_observeble = this.kategorie_service.getKategorienWithSubkategorien()
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
        (data) => {
          this.kategory = data as Kategorie[];
          console.log(this.kategory);
        }
    )
  }

  kategory_transision(kategory_name: string): void {
    this.drawerRef.toggle();
    this.kategorie_service.current_kategory_name = kategory_name;
  }

  containsAll(unterkategoriename: string): boolean {
    return unterkategoriename.includes('All');
  }

  doesNotContainGlobal(unterkategoriename: string): boolean {
    return unterkategoriename !== 'Global';
  }

}
