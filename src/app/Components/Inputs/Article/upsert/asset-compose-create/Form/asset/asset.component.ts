import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {AssetFormDataService} from "./service/asset-form-data.service";
import {AssetUpdateElementService} from "../../service/updateService/update-element-service-base.service";
import {Asset} from "../../../../../../../Interface/asset";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['../../../../../../../shared_css/input.css']
})
export class AssetComponent implements  OnInit {
  assetForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private assetFormDataService: AssetFormDataService,
    private updateElementService: AssetUpdateElementService
  ) {
  }

  ngOnInit(): void {
    this.initializeAssetForm();
  }

  initializeAssetForm() {
    let asset: Asset | undefined = undefined;

    if (this.updateElementService.isActivated()) {
      let article = this.updateElementService.getArticle();
      asset = article ? article.assets : undefined;
    }

    this.assetForm = new InitializationAsset(this.fb).initForm(asset);
    this.assetFormDataService.setForm(this.assetForm);
  }
}

export class InitializationAsset {

  constructor(private fb: FormBuilder) { }

  initForm(asset?: Asset): FormGroup {
    return this.fb.group({
      ID: asset ? asset.ID : undefined,
      Inventarnummer: asset ? asset.Inventarnummer : 0
    });
  }
}
