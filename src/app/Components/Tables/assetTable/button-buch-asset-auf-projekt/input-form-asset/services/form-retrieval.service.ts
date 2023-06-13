import { Injectable } from '@angular/core';
import {Util} from "./util.service";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormRetrieval {

  constructor(
    private util: Util,
  ) {
  }

  artikelnameForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_details.artikelname'));
  }

  firmaForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_details.firma'));
  }

  modelForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_details.model'));
  }

  preisForm(form: FormGroup): number {
    return this.util.getFormValueAsFloat(form.get('asset_numbers.preis'));
  }

  beschreibungForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_details.beschreibung'));
  }

  zustandForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_details.zustand'));
  }

  anlagenummerForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_numbers.anlagenummer'));
  }

  einkaufsDatumForm(form: FormGroup): string {
    return this.util.getFormValueAsISOString(form.get('date_info.einkaufs_datum'));
  }

  belegtVonForm(form: FormGroup): string {
    return this.util.getFormValueAsISOString(form.get('date_info.belegt_von'));
  }

  belegtBisForm(form: FormGroup): string {
    return this.util.getFormValueAsISOString(form.get('date_info.belegt_bis'));
  }

  editDateForm(form: FormGroup): string {
    return this.util.getFormValueAsISOString(form.get('date_info.edit_date'));
  }

  inventarnummerForm(form: FormGroup): number {
    return this.util.getFormValueAsNumber(form.get('asset_numbers.Inventarnummer'));
  }

  mengeForm(form: FormGroup): number {
    return this.util.getFormValueAsNumber(form.get('asset_numbers.menge'));
  }

  seriennummerForm(form: FormGroup): string {
    return this.util.getFormValue(form.get('asset_numbers.serriennummer'));
  }
}
