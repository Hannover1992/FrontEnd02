import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Asset} from "../../../../../Interface/article/asset";
import {Subscription} from "rxjs";
import {AssetFormDataService} from "./asset-form-data.service";

@Injectable({
  providedIn: 'root'
})

export class AssetDataService {
  public asset!: Asset;
  private assetSubscribtion!: Subscription;

  constructor(
    private assetFormData:   AssetFormDataService
  ) {
    this.subscribeAssetForm();
  }

  private subscribeAssetForm() {
    this.assetSubscribtion = this.assetFormData.getFormData().subscribe(data => {
      this.asset = this.formatFormToAsset(data)
    });
  }

  private formatFormToAsset(data: any): Asset {
    let asset: Asset = {
      ID: data?.ID,
      Inventarnummer: data?.Inventarnummer
    }

    console.log("Asset");
    console.log(asset);
    return asset;

  }
}
