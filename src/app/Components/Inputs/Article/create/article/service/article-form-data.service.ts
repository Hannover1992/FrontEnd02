import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BehaviorSubject, Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleFormDataService {
  private formData = new BehaviorSubject<any>({});

  constructor() { }

  setForm(form: FormGroup): void {
    form.valueChanges.subscribe(data => this.formData.next(data));
  }

  getFormData(): Observable<any> {
    return this.formData.asObservable();
  }
}
