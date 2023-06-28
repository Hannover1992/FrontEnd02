import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Asset} from "../../../../../../../../../Interface/asset";

@Injectable({
  providedIn: 'root'
})
export class AssetData {

  assetData: BehaviorSubject<Asset>  = new BehaviorSubject<Asset>({});

  constructor() {
  }

  restart(){
      this.assetData.next({});
  }

  rekursiveSetzen(assets: Asset | undefined) {
    if(assets === undefined){
      this.assetData.next({});
      return;
    }

    this.assetData.next(assets);
  }
}
