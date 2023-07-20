import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../form-data.service";
import {HandyUpdateElementService} from "./service/handy-update-element-service.service";
import {Handy} from "../../../../Interface/article/Handy";

@Component({
  selector: 'app-handy-input',
  templateUrl: './handy-input.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})
export class HandyInputComponent implements OnInit{
  hidePassword = true;

  handyForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private updateElementService: HandyUpdateElementService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    let handy: Handy  | undefined = undefined;

    if(this.updateElementService.isActivated()){
      let article = this.updateElementService.getArticle();
      handy = article ? article.handy : undefined;
    }

    this.handyForm = this.initForm(handy);
    this.formDataService.setForm(this.handyForm)
  }

  initForm(handy?: Handy): FormGroup {
    return this.fb.group({
      handy_id: handy ? handy.handy_id : undefined,
      imei_1: handy ? handy.imei_1 : '',
      besitzer: handy ? handy.besitzer : '',
      sim_karten_nummer: handy ? handy.sim_karten_nummer : '',
      bildschirmsperre_pin: handy ? handy.bildschirmsperre_pin : '',
      email_adresse: handy ? handy.email_adresse : '',
      password: handy ? handy.password : '',
    });
  }

}
