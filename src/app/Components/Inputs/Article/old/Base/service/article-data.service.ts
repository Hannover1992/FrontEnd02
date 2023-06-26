import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../../Interface/article";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class ArticleData {

  public article: BehaviorSubject<Article> = new BehaviorSubject<Article>({});

  public artikelFormValid: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public menge: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {
  }

  restart(){

    this.article.next({});

    this.artikelFormValid.next(false)

    this.menge.next(1);

  }

  rekusivSetzen(artikel : Article, menge : number) {
    this.article.next(artikel);
    this.menge.next(menge);
  }
}
