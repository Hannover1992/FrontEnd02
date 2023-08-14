import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_DB} from "../settings";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class KategorienWithSubkategorienService {

  private _current_unterkategorie: BehaviorSubject<string> = new BehaviorSubject<string>('Projekt');
  // private _current_unterkategorie: BehaviorSubject<Subkategorie>


  set current_kategory_name(name: string) {
    this._current_unterkategorie.next(name)
  }


  get current_unterkategorie(): BehaviorSubject<string> {
    return this._current_unterkategorie;
  }

  constructor(public http: HttpClient ) {
  }


  public getKategorienWithSubkategorien(){
    return this.http.get(this.generateURL());
  }


  generateURL() {
    return URL_DB + '/kategorieJoinSub';
  }

}
