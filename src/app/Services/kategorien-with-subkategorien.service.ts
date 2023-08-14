import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URL_DB} from "../settings";
import {BehaviorSubject} from "rxjs";
import {Subcategory} from "../Interface/Subcategory";


@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})

export class KategorienWithSubkategorienService {
  get current_opened_table(): BehaviorSubject<string> {
    return this._current_opened_table;
  }

  private _categoriesData: any[] = []; // To store the fetched data

  private _current_opened_table = new BehaviorSubject<string>('Projekt');

  private _current_subkategorie = new BehaviorSubject<Subcategory>(this.initSubcategory());



  set current_kategory_name(name: string) {
    this._current_opened_table.next(name);
    const subcategory = this.getSubcategoryForName(name);
    if (subcategory) {
      this._current_subkategorie.next(subcategory);
    }
  }

  constructor(public http: HttpClient) {
    this.getKategorienWithSubkategorien().subscribe(data => {
      this._categoriesData = data;
    });
    console.log(
      this._current_subkategorie.subscribe(
      data => console.log(data)
    ))
  }


  private initSubcategory(): Subcategory {
    return {
      unterkategorie_id: 0,
      unterkategoriename: 'Empty',
      kategorie_id: 0,
      zeigt_alles_an: false
    };
  }

  public getKategorienWithSubkategorien() {
    return this.http.get<any[]>(this.generateURL());
  }

  generateURL() {
    return URL_DB + '/kategorieJoinSub';
  }

  private getSubcategoryForName(name: string): Subcategory | null {
    const category = this._categoriesData.find(cat => cat.kategoriename === name);
    return category ? category.unterkategorie[0] : null;  // Returning the first subcategory. Adjust as needed.
  }

  isThisAnShowAllSubcategory(): boolean {
    return this._current_subkategorie.getValue().zeigt_alles_an;
  }
}
