import { Component } from '@angular/core';
import {ProjectsService} from "../../../projectTable/service/projects.service";
import {UnterKategorieService} from "../../../../Services/unter-kategorie.service";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-input-form-asset',
  templateUrl: './input-form-asset.component.html',
  styleUrls: ['./input-form-asset.component.css']
})


export class InputFormAssetComponent {



  assetForm = this.fb.group({
    asset_details: this.fb.group({
      firma: [''],
      artikelname: [''],
      model: [''],
      // toDo: Zustand als slect form list
      zustand: [''],
      beschreibung: [''],
    }),
    asset_numbers: this.fb.group({
      menge: [1, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        this.positiveNonZero
      ])],
      preis: [''],
      Inventarnummer: [0],
      anlagenummer: ['']
    }),
    date_info: this.fb.group({
      einkaufs_datum: [new Date()],
      edit_date: [new Date()],
      belegt_von: [new Date()],
      belegt_bis: [new Date()],
    }),
  });


  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return { nonPositiveOrZero: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.assetForm.valueChanges.subscribe(console.log);
  }


  ProjektID = this.projectsService.selectedProject.getValue();
  unterkategorieID = this.subKategorieService.selectedUnterKategorieId.getValue();


  constructor(
    private fb: FormBuilder,
    public projectsService: ProjectsService,
    public subKategorieService: UnterKategorieService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }


  post_new_artikel_asset_on_project_artikel() {
    //toDo: take current value and make http request on database
  }
}

// form of the api request
// {
//     "projekt_id": 802007,
//     "menge": 6,
//     "artikelname": "other Kabel last over REST API",
//     "unterkategorie_id": 1,
//     "preis": null,
//     "beschreibung": null,
//     "bild_url": null,
//     "zustand": null,
//     "einkaufs_datum": "2023-05-20T10:35:16.000Z",
//     "belegt_von": null,
//     "belegt_bis": null,
//     "anlagenummer": null,
//     "edit_date": "2023-05-20T10:35:16.000Z",
//     "besitzer_id": null,
//     "firma": null,
//     "model": null,
//     "Inventarnummer": 123456,
//     "unterkategorie_id": 1
// }
