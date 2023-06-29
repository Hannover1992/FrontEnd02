import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_DB} from "../settings";



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


  constructor(public http: HttpClient ) {
  }

  public getKategorienWithSubkategorien(){
    return this.http.get(this.generateURL());
  }


  generateURL() {
    return URL_DB + '/kategorieJoinSub';
  }


}
