import { Injectable } from '@angular/core';
import {URL} from "../../../../settings";

@Injectable({
  providedIn: 'root'
})
export class AssetTableService {

  constructor() { }


  generateURL() {

    return URL + '/assets' + '/';
  }
}
