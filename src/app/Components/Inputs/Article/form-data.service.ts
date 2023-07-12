import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Asset} from "../../../Interface/article/asset";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private assetFormData = new BehaviorSubject<any>({});
  constructor() {
  }


  setForm(form: FormGroup): void {
    this.assetFormData.next(form.value);
    form.valueChanges.subscribe(
      data =>
      {
        this.assetFormData.next(data);
      }
    );
  }

  getFormData(): Observable<Asset> {
    return this.assetFormData.asObservable();
  }
}
