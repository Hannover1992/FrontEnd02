import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../Interface/article";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class ArtikelFormDataService {

  public articleForm: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(new FormGroup({}));
  public article: BehaviorSubject<Article> = new BehaviorSubject<Article>({});
  public menge: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {
  }
}
