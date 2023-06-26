import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class MengeFormDataService {
  private mengeFormData = new BehaviorSubject<any>({
    menge: 1
  });
  constructor() { }

  setForm(form: FormGroup): void {
    form.valueChanges.subscribe(data => {
      this.mengeFormData.next(data);
    });
  }

  getFormData(): Observable<any> {
    return this.mengeFormData.asObservable();
  }
}

