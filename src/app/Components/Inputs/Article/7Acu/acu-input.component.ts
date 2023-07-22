import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AcuDataService} from "./service/acu-data.service";
import {AcuUpdateElementService} from "./service/acuUpdateElement.service";
import {Acu} from "../../../../Interface/article/Acu";
import {FormDataService} from "../form-data.service";

@Component({
  selector: 'app-acu-input',
  templateUrl: './acu-input.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})
export class AcuInputComponent implements OnInit {

  acuForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private updateElementService: AcuUpdateElementService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    let acu: Acu | undefined = undefined;

    if(this.updateElementService.isActivated()){
      let article = this.updateElementService.getArticle();
      acu = article ? article.acu : undefined;
    }

    this.acuForm = this.initForm(acu);
    this.formDataService.setForm(this.acuForm);
  }

  initForm(acu?: Acu): FormGroup {
    return this.fb.group({
      acu_id: acu ? acu.acu_id : undefined,
      router: acu ? acu.router : '',
      ip_adresse: acu ? acu.ip_adresse : '',
    });
  }
}
