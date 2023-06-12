import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentRowArtieklService {
  public currentElement: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
}
