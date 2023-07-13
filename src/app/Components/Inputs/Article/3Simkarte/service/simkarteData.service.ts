import { Injectable } from '@angular/core';
import {Simkarten} from "../../../../../Interface/article/Simkarte";
import {Subscription} from "rxjs";
import {FormDataService} from "../../form-data.service";

@Injectable({
  providedIn: 'root'
})
export class SimkarteDataService {
  public simkarte!: Simkarten;
  private simkarteSubscribtion!: Subscription;

  constructor(
    private simkartenFormData:   FormDataService
  ) {
    this.subscribeSimkarteForm();
  }

  private subscribeSimkarteForm() {
    this.simkarteSubscribtion = this.simkartenFormData.getFormData().subscribe(data => {
      this.simkarte = this.formatFormToSimkarten(data)
    });
  }

  private formatFormToSimkarten(data: any): Simkarten {
    console.log("hier")
    let simkarte: Simkarten = {
      simkarten_id: data?.simkarten_id,
      kundennummer: data?.kundennummer,
      tarif: data?.tarif,
      pin: data?.pin,
      puk: data?.puk,
      einsatzort: data?.einsatzort,
      aktiv: data?.activiert === 'true'
    }

    console.log("get ride of the activ string")
    console.log(simkarte);

    return simkarte;
  }
}
