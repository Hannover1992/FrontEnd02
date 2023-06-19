import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";


export enum Zustand {
  NEU = 'Neu',
  GUT = 'Gut',
  MITTELMAESSIG = 'Mittelmaessig',
  SCHLECHT = 'Schlecht',
  KAPUTT = 'Kaputt'
}

@Component({
  selector: 'app-asset-input-detail',
  templateUrl: './asset-input-detail.component.html',
  styleUrls: ['../../../../Tables/shared_css/input.css']
})
export class AssetInputDetailComponent  {
  @Input() asset_details!: FormGroup;

  zustandOptions: Zustand[] = [
    Zustand.NEU,
    Zustand.GUT,
    Zustand.MITTELMAESSIG,
    Zustand.SCHLECHT,
    Zustand.KAPUTT
  ];



  constructor() { }

}
