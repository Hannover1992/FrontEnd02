import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Asset} from "../../../../../../../Interface/asset";

@Injectable({
  providedIn: 'root'
})
export class AssetInputDataService {

  assetInputFormData: BehaviorSubject<Asset>  = new BehaviorSubject<Asset>({});

  constructor() {
  }
}
