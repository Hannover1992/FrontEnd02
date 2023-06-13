import { Component } from '@angular/core';
import {ProjectsService} from "../../../projectTable/service/projects.service";
import {UnterKategorieService} from "../../../../Services/unter-kategorie.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProjectArticle} from "../../Interface/projectArticle";
import {AssetTableService} from "../../../../Services/asset-table.service";
import {Article} from "../../Interface/article";

@Component({
  selector: 'app-input-form-asset',
  templateUrl: './input-form-asset.component.html',
  styleUrls: ['../../../shared_css/input.css']
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
      anlagenummer: [''],
      serriennummer: [''],
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
      return {nonPositiveOrZero: true};
    }
    return null;
  }

  ngOnInit(): void {
  }


  constructor(
    private fb: FormBuilder,
    public projectsService: ProjectsService,
    public unterKategorieService: UnterKategorieService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private assetTableService: AssetTableService
  ) {
  }


  onSubmit() {
    let newProjectARticleFromForm = this.from_Form_to_ProjectArtickle();
    this.assetTableService.create_new_asset(newProjectARticleFromForm);
    this.dialog.closeAll();


    // TODO: Save newArticle and newProjectArticle to backend
  }

  private from_Form_to_ProjectArtickle(): ProjectArticle {
    const unterkategorieID = this.getUnterkategorieID();
    const projektID = this.getProjektID();
    const newArticle = this.createNewArticle(unterkategorieID);

    return this.createNewProjectArticle(projektID, newArticle);
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

  private createNewArticle(unterkategorieID: number): Article {
    return {
      artikel_id: 0,
      artikelname: this.getFormValue(this.artikelnameForm),
      firma: this.getFormValue(this.firmaForm),
      model: this.getFormValue(this.modelForm),
      unterkategorie_id: unterkategorieID,
      preis: this.getFormValueAsFloat(this.preisForm),
      beschreibung: this.getFormValue(this.beschreibungForm),
      bild_url: '',
      zustand: this.getFormValue(this.zustandForm),
      einkaufs_datum: this.getFormValueAsISOString(this.einkaufsDatumForm),
      belegt_von: this.getFormValueAsISOString(this.belegtVonForm),
      belegt_bis: this.getFormValueAsISOString(this.belegtBisForm),
      edit_date: this.getFormValueAsISOString(this.editDateForm),
      anlagenummer: this.getFormValue(this.anlagenummerForm),
      besitzer_id: null,
      seriennummer: this.getFormValue(this.seriennummerForm),
      assets: {
        ID: 0,
        Inventarnummer: this.getFormValueAsNumber(this.inventarnummerForm),
      },
    };
  }

  private createNewProjectArticle(projektID: number, newArticle: Article): ProjectArticle {
    return {
      projekt_artikel_id: 0,
      projekt_id: projektID,
      artikel_id: 0,
      menge: this.getFormValueAsNumber(this.mengeForm),
      artikel: newArticle
    };
  }

  private getFormValue(control: AbstractControl<any, any> | null): string {
    return control && control.value ? control.value : '';
  }

  private getFormValueAsFloat(control: AbstractControl<any, any> | null): number {
    return control && control.value ? parseFloat(control.value) : 0;
  }

  private getFormValueAsNumber(control: AbstractControl<any, any> | null): number {
    return control && control.value ? Number(control.value) : 0;
  }

  private getFormValueAsISOString(control: AbstractControl<any, any> | null): string {
    return control && control.value ? control.value.toISOString() : '';
  }


  get artikelnameForm() {
    return this.assetForm.get('asset_details.artikelname');
  }

  get firmaForm() {
    return this.assetForm.get('asset_details.firma');
  }

  get modelForm() {
    return this.assetForm.get('asset_details.model');
  }

  get preisForm() {
    return this.assetForm.get('asset_numbers.preis');
  }

  get beschreibungForm() {
    return this.assetForm.get('asset_details.beschreibung');
  }

  get zustandForm() {
    return this.assetForm.get('asset_details.zustand');
  }

  get anlagenummerForm() {
    return this.assetForm.get('asset_numbers.anlagenummer');
  }

  get einkaufsDatumForm() {
    return this.assetForm.get('date_info.einkaufs_datum');
  }

  get belegtVonForm() {
    return this.assetForm.get('date_info.belegt_von');
  }


  get belegtBisForm() {
    return this.assetForm.get('date_info.belegt_bis');
  }

  get editDateForm() {
    return this.assetForm.get('date_info.edit_date');
  }

  get inventarnummerForm() {
    return this.assetForm.get('asset_numbers.Inventarnummer');
  }

  get mengeForm() {
    return this.assetForm.get('asset_numbers.menge');
  }

  get seriennummerForm() {
    return this.assetForm.get('asset_numbers.serriennummer');
  }

}

