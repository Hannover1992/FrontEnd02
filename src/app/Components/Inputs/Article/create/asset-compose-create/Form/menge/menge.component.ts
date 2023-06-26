import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {MengeFormDataService} from "./service/menge-form-data.service";

@Component({
  selector: 'app-menge',
  templateUrl: './menge.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class MengeComponent {
  mengeForm: any;

  constructor(
    private fb: FormBuilder,
    private mengeFormDataService: MengeFormDataService,
  ) {
    this.mengeForm = new InitializationMenge(this.fb).initForm();
    this.mengeFormDataService.setForm(this.mengeForm);

  }

}

export class InitializationMenge {

  constructor(
    private fb: FormBuilder,
  ) {
  }

  initForm(){
    return this.fb.group({
      menge: [1, Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        this.positiveNonZero // Make sure you have defined this custom validator function
      ])],
    })
  }

  positiveNonZero(control: AbstractControl) {
    if (control.value <= 0) {
      return {nonPositiveOrZero: true};
    }
    return null;
  }
}
