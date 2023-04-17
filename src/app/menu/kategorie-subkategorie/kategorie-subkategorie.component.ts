import { Component } from '@angular/core';

@Component({
  selector: 'app-kategorie-subkategorie',
  templateUrl: './kategorie-subkategorie.component.html',
  styleUrls: ['./kategorie-subkategorie.component.css']
})
export class KategorieSubkategorieComponent {

  animals = [
    {
      name: 'Vertebrates',
      subcategories: [
        {
          name: 'Fishes',
          items: ['Baikal oilfish', 'Bala shark', 'Ballan wrasse', 'Bamboo shark', 'Banded killifish']
        },
        {
          name: 'Amphibians',
          items: ['Sonoran desert toad', 'Western toad', 'Arroyo toad', 'Yosemite toad']
        },
        {
          name: 'Reptiles',
          items: ['Banded Day Gecko', 'Banded Gila Monster', 'Black Tree Monitor', 'Blue Spiny Lizard', 'Velociraptor']
        },
        { name: 'Birds', items: [] },
        { name: 'Mammals', items: [] },
      ]
    },
    {
      name: 'Invertebrates',
      subcategories: [
        { name: 'Insects', items: [] },
        { name: 'Molluscs', items: [] },
        { name: 'Crustaceans', items: [] },
        { name: 'Corals', items: [] },
        { name: 'Arachnids', items: [] },
        { name: 'Velvet worms', items: [] },
        { name: 'Horseshoe crabs', items: [] },
      ]
    },
  ];


}
