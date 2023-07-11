import { Injectable } from '@angular/core';
import {MengeFormDataService} from "./menge-form-data.service";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MengeDataService {
  menge!: number;
  private mengeSubscribtion!: Subscription;

  constructor(
    private mengeFormData : MengeFormDataService
  ) {
    this.subscribeMengeForm();
  }

  private subscribeMengeForm() {
    this.menge = this.mengeFormData.getFormValue();
    this.mengeSubscribtion = this.mengeFormData.getFormData().subscribe(data => {
      this.menge = this.formatFormToMenge(data)
    });
  }

  private formatFormToMenge(data: any) {
    return data?.menge
  }
}
