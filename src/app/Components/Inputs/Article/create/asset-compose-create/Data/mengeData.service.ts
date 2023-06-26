import { Injectable } from '@angular/core';
import {MengeFormDataService} from "../Form/menge/service/menge-form-data.service";
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
    this.mengeSubscribtion = this.mengeFormData.getFormData().subscribe(data => {
      this.menge = this.formatFormToMenge(data)
      console.log("das ist die Aktuelle Menge")
      console.log(this.menge);
    });
  }

  private formatFormToMenge(data: any) {
    return data?.Menge;
  }
}
