import { Injectable } from '@angular/core';
import {Acu} from "../../../../../Interface/article/Acu";
import {Subscription} from "rxjs";
import {FormDataService} from "../../form-data.service";

@Injectable({
  providedIn: 'root'
})
export class AcuDataService {
  public acu!: Acu;
  private acuSubscription!: Subscription;

  constructor(
    private acuFormData: FormDataService // Use the FormDataService that deals with Acu data
  ) {
    this.subscribeAcuForm();
  }

  private subscribeAcuForm() {
    this.acuSubscription = this.acuFormData.getFormData().subscribe(data => {
      this.acu = this.formatFormToAcu(data);
    });
  }

  private formatFormToAcu(data: any): Acu {
    let acu: Acu = {
      acu_id: data?.acu_id,
      router: data?.router,
      ip_adresse: data?.ip_adresse
    }
    return acu;
  }
}
