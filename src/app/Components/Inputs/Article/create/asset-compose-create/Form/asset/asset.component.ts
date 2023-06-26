import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {AssetFormDataService} from "./service/asset-form-data.service";

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class AssetComponent implements  OnInit {
  assetForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private assetFormDataService: AssetFormDataService,
  ) {
  }


  ngOnInit(): void {
    this.assetForm = new intializationAsset(this.fb).initForm();
    this.assetFormDataService.setForm(this.assetForm);
  }

}

export class intializationAsset{

  constructor(
    private fb: FormBuilder,
  ) { }

  initForm(){
    return this.fb.group({
      ID: [''],
      Inventarnummer: ['']
    });
  }

}
