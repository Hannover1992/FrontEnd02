import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../form-data.service";
import {AssetUpdateElementService} from "../2Asset/service/AssetUpdateElementService";
import {SimkartenUpdateElementService} from "./service/SimkartenUpdateElementService";
import {Simkarten} from "../../../../Interface/article/Simkarte";
import {InitializationAsset} from "../2Asset/asset.component";

@Component({
  selector: 'app-simkarte',
  templateUrl: './simkarten.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})
export class SimkartenComponent implements OnInit{
  simkarteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private updateElementService: SimkartenUpdateElementService
  ) {}

  ngOnInit(): void {
   this.initializeForm();

    this.simkarteForm.valueChanges.subscribe(value => {
      console.log(value)
    });
  }
  test(){
    console.log(this.simkarteForm)
  }

  private initializeForm() {
    let simkarten: Simkarten | undefined = undefined;

    if(this.updateElementService.isActivated()){
      let article = this.updateElementService.getArticle();
      simkarten = article ? article.simkarte : undefined;
    }

    this.simkarteForm = new InitializationSimkarten(this.fb).initForm(simkarten);
    this.formDataService.setForm(this.simkarteForm)
  }
}

export class InitializationSimkarten {

  constructor(private fb: FormBuilder) { }

  initForm(simkarte?: Simkarten): FormGroup {
    return this.fb.group({
      simkarten_id: simkarte ? simkarte.simkarten_id : undefined,
      kundennummer: simkarte ? simkarte.kundennummer : '',
      tarif: simkarte ? simkarte.tarif : '',
      pin: simkarte ? simkarte.pin : '',
      puk: simkarte ? simkarte.puk : '',
      einsatzort: simkarte ? simkarte.einsatzort : '',
      activiert: simkarte ? simkarte.aktiv : false
    });
  }
}
