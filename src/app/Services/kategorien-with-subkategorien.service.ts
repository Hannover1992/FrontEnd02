import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_DB} from "../settings";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class KategorienWithSubkategorienService {

  private _current_unterkategorie: BehaviorSubject<string> = new BehaviorSubject<string>('Projekt');
  private _current_unterkategorie_id: BehaviorSubject<number>       = new BehaviorSubject<number>(-1)

  set current_kategory_name(name: string) {
    this._current_unterkategorie.next(name)
  }


  get current_unterkategorie(): BehaviorSubject<string> {
    return this._current_unterkategorie;
  }
  // toDo: hier wiet arbeitn an die kateogri und subkateogie, die kann man als ein datei struktu bind
  //   und dann die id mitschleppen um sicher hiet zu haben dasss es nur eien einzige subkategorei g




  constructor(public http: HttpClient ) {
  }


  public getKategorienWithSubkategorien(){
    return this.http.get(this.generateURL());
  }


  generateURL() {
    return URL_DB + '/kategorieJoinSub';
  }

}
