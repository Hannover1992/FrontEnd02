import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class SmallVaterHelperService {

  constructor() { }

  otherFun() {
    console.log("other fun from helper")
  }
  protected abstract extendedInit() : void;
}
