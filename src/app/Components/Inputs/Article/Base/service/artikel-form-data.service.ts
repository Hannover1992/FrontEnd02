import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../Interface/article";

@Injectable({
  providedIn: 'root'
})

export class ArtikelFormDataService {

  public article: BehaviorSubject<Article> = new BehaviorSubject<Article>({});
  public menge: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }
}
