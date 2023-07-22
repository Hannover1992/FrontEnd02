import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../form-data.service";
import {RouterUpdateElementService} from "./service/router-update-element.service";
import {Router} from "../../../../Interface/article/Router";

@Component({
  selector: 'app-router-input',
  templateUrl: './router-input.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})

export class RouterInputComponent implements OnInit {
  hidePassword = true;

  routerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private updateElementService: RouterUpdateElementService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    let router: Router | undefined = undefined;

    if(this.updateElementService.isActivated()){
      let article = this.updateElementService.getArticle();
      router = article ? article.router : undefined;
    }

    this.routerForm = this.initForm(router);
    this.formDataService.setForm(this.routerForm);
  }

  initForm(router?: Router): FormGroup {
    return this.fb.group({
      router_id: router ? router.router_id : undefined,
      imei: router ? router.imei : '',
      ip_adresse: router ? router.ip_adresse : '',
      benutzername: router ? router.benutzername : '',
      passwort: router ? router.passwort : '',
      iccid: router ? router.iccid : '',
      pin: router ? router.pin : '',
      puk: router ? router.puk : '',
    });
  }
}
