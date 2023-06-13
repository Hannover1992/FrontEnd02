import { Component } from '@angular/core';
import {ProjectsService} from "../../../projectTable/service/projects.service";
import {UnterKategorieService} from "../../../../Services/unter-kategorie.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProjectArticle} from "../../Interface/projectArticle";
import {AssetTableService} from "../../../../Services/asset-table.service";
import {Article} from "../../Interface/article";
import {Initialization} from "./initialization";
import {Util} from "./services/util.service";



@Component({
  selector: 'app-input-form-asset',
  templateUrl: './input-artikle-form.component.html',
  styleUrls: ['../../../shared_css/input.css']
})


export class InputArtikelForm {

  artikelForm: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    public projectsService: ProjectsService,
    public unterKategorieService: UnterKategorieService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private assetTableService: AssetTableService,
    private util: Util
  ) {
    this.artikelForm =  new Initialization(fb).initForm();
  }

  onSubmit() {
    let newProjectARticleFromForm = this.createNewProjectArticle();
    this.assetTableService.create_new_asset(newProjectARticleFromForm);
    this.dialog.closeAll();
    // TODO: Save newArticle and newProjectArticle to backend
  }


  private createNewArticle(): Article {

    const unterkategorieID = this.getUnterkategorieID();

    return {
      artikel_id: 0,
      artikelname: this.artikelnameForm,
      firma: this.firmaForm,
      model: this.modelForm,
      unterkategorie_id: unterkategorieID,
      preis: this.preisForm,
      beschreibung: this.beschreibungForm,
      bild_url: '',
      zustand: this.zustandForm,
      einkaufs_datum: this.einkaufsDatumForm,
      belegt_von: this.belegtVonForm,
      belegt_bis: this.belegtBisForm,
      edit_date: this.editDateForm,
      anlagenummer: this.anlagenummerForm,
      besitzer_id: null,
      seriennummer: this.seriennummerForm,
      assets: {
        ID: 0,
        Inventarnummer: this.inventarnummerForm,
      },
    };
  }

  private createNewProjectArticle(): ProjectArticle {
    const projektID = this.getProjektID();
    const newArticle = this.createNewArticle();

    return {
      projekt_artikel_id: 0,
      projekt_id: projektID,
      artikel_id: 0,
      menge: this.mengeForm,
      artikel: newArticle
    };
  }

  get assetDetails(): FormGroup {
    return this.artikelForm.get('asset_details') as FormGroup;
  }

  get assetDates(): FormGroup {
    return this.artikelForm.get('date_info') as FormGroup;
  }

  get assetNumbers(): FormGroup {
    return this.artikelForm.get('asset_numbers') as FormGroup;
  }


  private getUnterkategorieID(): number {
    const unterkategorieID = this.unterKategorieService.selectedUnterKategorieId.getValue();
    if (!unterkategorieID) {
      throw new Error("unterkategorieID is null");
    }
    return unterkategorieID;
  }

  private getProjektID(): number {
    let proStr = this.projectsService.selectedProject.getValue();
    return parseInt(proStr);
  }

  get artikelnameForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_details.artikelname'));
  }

  get firmaForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_details.firma'));
  }

  get modelForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_details.model'));
  }

  get preisForm(): number {
    return this.util.getFormValueAsFloat(this.artikelForm.get('asset_numbers.preis'));
  }

  get beschreibungForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_details.beschreibung'));
  }

  get zustandForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_details.zustand'));
  }

  get anlagenummerForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_numbers.anlagenummer'));
  }

  get einkaufsDatumForm(): string {
    return this.util.getFormValueAsISOString(this.artikelForm.get('date_info.einkaufs_datum'));
  }

  get belegtVonForm(): string {
    return this.util.getFormValueAsISOString(this.artikelForm.get('date_info.belegt_von'));
  }

  get belegtBisForm(): string {
    return this.util.getFormValueAsISOString(this.artikelForm.get('date_info.belegt_bis'));
  }

  get editDateForm(): string {
    return this.util.getFormValueAsISOString(this.artikelForm.get('date_info.edit_date'));
  }

  get inventarnummerForm(): number {
    return this.util.getFormValueAsNumber(this.artikelForm.get('asset_numbers.Inventarnummer'));
  }

  get mengeForm(): number {
    return this.util.getFormValueAsNumber(this.artikelForm.get('asset_numbers.menge'));
  }

  get seriennummerForm(): string {
    return this.util.getFormValue(this.artikelForm.get('asset_numbers.serriennummer'));
  }

}
