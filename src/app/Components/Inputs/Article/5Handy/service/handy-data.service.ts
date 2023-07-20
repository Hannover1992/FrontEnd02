import { Injectable } from '@angular/core';
import {Handy} from "../../../../../Interface/article/Handy";
import {Subscription} from "rxjs";
import {FormDataService} from "../../form-data.service";

@Injectable({
  providedIn: 'root'
})
export class HandyDataService {
  public handy!: Handy;
  private handySubscribtion!: Subscription;

  constructor(
    private handyFormData: FormDataService // Use the FormDataService that deals with Handy data
  ) {
    this.subscribeHandyForm();
  }

  private subscribeHandyForm() {
    this.handySubscribtion = this.handyFormData.getFormData().subscribe(data => {
      this.handy = this.formatFormToHandy(data)
    });
  }

  private formatFormToHandy(data: any): Handy {
    let handy: Handy = {
      handy_id: data?.handy_id,
      imei_1: data?.imei_1,
      besitzer: data?.besitzer,
      sim_karten_nummer: data?.sim_karten_nummer,
      bildschirmsperre_pin: data?.bildschirmsperre_pin,
      email_adresse: data?.email_adresse,
      password: data?.password
    }
    return handy;
  }
}
