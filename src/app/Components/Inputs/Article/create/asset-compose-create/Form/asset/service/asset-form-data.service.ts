import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Asset} from "../../../../../../../Interface/asset";

@Injectable({
  providedIn: 'root'
})
export class AssetFormDataService {
  private assetFormData = new BehaviorSubject<any>({});
  constructor() {
  }


  setForm(form: FormGroup): void {
    form.valueChanges.subscribe(data => this.assetFormData.next(data));
  }

  getFormData(): Observable<any> {
    return this.assetFormData.asObservable();
  }
}
