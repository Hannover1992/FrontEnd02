import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Util} from "./util.service";

@Injectable({
  providedIn: 'root'
})

export class ErweiterterAssetRetrivalService {

  constructor(
    private util: Util,
  ) { }


  inventarnummerForm(form: FormGroup): number {
    return this.util.getFormValueAsNumber(form.get('Inventarnummer'));
  }
}
