import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AssetFormDataService {
  private formData = new BehaviorSubject<any>({});
  constructor() { }


  setForm(form: FormGroup): void {
    form.valueChanges.subscribe(data => this.formData.next(data));
  }

  getFormData(): Observable<any> {
    return this.formData.asObservable();
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { FormGroup } from '@angular/forms';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class FormDataService {
//   private formData = new BehaviorSubject<any>({});
//
//   constructor() { }
//
//   setForm(form: FormGroup): void {
//     form.valueChanges.subscribe(data => this.formData.next(data));
//   }
//
//   getFormData(): Observable<any> {
//     return this.formData.asObservable();
//   }
// }
