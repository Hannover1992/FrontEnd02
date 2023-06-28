import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Asset} from "../../../../../../Interface/asset";
import {Subscription} from "rxjs";
import {AssetFormDataService} from "../Form/asset/service/asset-form-data.service";

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

    return asset;

  }
}
