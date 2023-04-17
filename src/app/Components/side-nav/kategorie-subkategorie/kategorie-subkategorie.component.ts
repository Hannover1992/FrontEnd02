import { Component } from '@angular/core';
import {ProjectsService} from "../../projectTable/service/projects.service";
import {KategorienWithSubkategorienService} from "../service/kategorien-with-subkategorien.service";


interface Kategorie {
  kategorie_id: number;
  kategoriename: string;
  subkategorien: UnterKategorie[];
}

interface UnterKategorie {
  unterkategorie_id: number;
  unterkategoriename: string;
  kategorie_id: number;
}

@Component({
  selector: 'app-kategorie-subkategorie',
  templateUrl: './kategorie-subkategorie.component.html',
  styleUrls: ['./kategorie-subkategorie.component.css']
})
export class KategorieSubkategorieComponent {
  // Menu = [
  //   {
  //     name: 'Kategorie',
  //     Kategorie: [
  //       {
  //         name: 'Fishes',
  //         SubKategorien: ['Baikal oilfish', 'Bala shark', 'Ballan wrasse', 'Bamboo shark', 'Banded killifish']
  //       },
  //       {
  //         name: 'Amphibians',
  //         SubKategorien: ['Sonoran desert toad', 'Western toad', 'Arroyo toad', 'Yosemite toad']
  //       },
  //       {
  //         name: 'Reptiles',
  //         SubKategorien: ['Banded Day Gecko', 'Banded Gila Monster', 'Black Tree Monitor', 'Blue Spiny Lizard', 'Velociraptor']
  //       },
  //       { name: 'Birds', SubKategorien: [] },
  //       { name: 'Mammals', SubKategorien: [] },
  //     ]
  //   }
  // ];

  kategory : Kategorie[] = [];

constructor(private kategorie_service : KategorienWithSubkategorienService) { }

  getKategorieWithSubkategorie() {
    this.kategorie_service.getKategorienWithSubkategorien().subscribe(
      (data) => {
        this.kategory = data as Kategorie[];
        console.log(this.kategory);
      }
    )
  }


}
