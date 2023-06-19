import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../../Interface/projectArticle";
import {Form, FormGroup} from "@angular/forms";
import {Article} from "../../../../Interface/article";

@Injectable({
  providedIn: 'root'
})

export class ArtikelFormDataService {

  public article: BehaviorSubject<Article> = new BehaviorSubject<Article>({});

  constructor() {
  }
}
