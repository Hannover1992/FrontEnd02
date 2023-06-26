import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BehaviorSubject, Observable, Observer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleFormDataService {
  private formData = new BehaviorSubject<any>({});

  //toDo: subscribe to Subcategory
  constructor() { }

  setForm(form: FormGroup): void {
    form.valueChanges.subscribe(data => {
      this.formData.next(data)
      console.log("this is the article Data Form")
      console.log(data);
    });

  }

  getFormData(): Observable<any> {
    return this.formData.asObservable();
  }
}