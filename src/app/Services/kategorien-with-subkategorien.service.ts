import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_DB} from "../settings";
import {BehaviorSubject} from "rxjs";



interface Kategorie {
  kategorie_id: number;
  kategoriename: string;
  subkategorien: UnterKategorie[];
}

interface UnterKategorie {
  unterkategorie_id: number;
  unterkategoriename: string;
  kategorie_id: number;
}


@Injectable({
  providedIn: 'root'
})

export class KategorienWithSubkategorienService {

  private _current_kategory: BehaviorSubject<string> = new BehaviorSubject<string>('Projekt');

  set current_kategory_name(name: string) {
    this._current_kategory.next(name)
  }

  get current_kategory(): BehaviorSubject<string> {
    return this._current_kategory;
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
