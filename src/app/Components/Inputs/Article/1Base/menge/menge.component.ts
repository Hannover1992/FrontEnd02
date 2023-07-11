import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MengeFormDataService} from "./service/menge-form-data.service";
import {AssetUpdateElementService} from "../../2Asset/service/AssetUpdateElementService";
import {ProjectArticle} from "../../../../../Interface/projectArticle";

@Component({
  selector: 'app-menge',
  templateUrl: './menge.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class MengeComponent implements OnInit {
  mengeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private mengeFormDataService: MengeFormDataService,
    private updateElementService: AssetUpdateElementService
  ) { }

  ngOnInit(): void {
    this.initializeMengeForm();
  }

  initializeMengeForm() {
    let menge: number | undefined = undefined;

    if (this.updateElementService.isActivated()) {
      let projectArticle: ProjectArticle | undefined = this.updateElementService.getProjectArticle();
      menge = projectArticle ? projectArticle.menge : undefined;
    }

    this.mengeForm = new InitializationMenge(this.fb).initForm(menge);
    this.mengeFormDataService.setForm(this.mengeForm);
  }
}

export class InitializationMenge {

  constructor(
    private fb: FormBuilder,
  ) {
  }

  initForm(menge?: number): FormGroup {
    return this.fb.group({
      menge: [menge || 1, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        this.positiveNonZero
      ])],
    });
  }

  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return {nonPositiveOrZero: true};
    }
    return null;
  }
}
