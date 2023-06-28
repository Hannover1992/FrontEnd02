import { Injectable } from '@angular/core';
import {Article} from "../../../../../../Interface/article";
import {BehaviorSubject, Observer} from "rxjs";
import {ProjectArticle} from "../../../../../../Interface/projectArticle";

@Injectable({
  providedIn: 'root'
})
export class ArticleUpdateServiceService {

  //behaviour Subject
  currentProjectArticleForUpdate: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});

  constructor() {
  }
}
