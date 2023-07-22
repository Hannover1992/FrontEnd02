import { Injectable } from '@angular/core';
import {Router} from "../../../../../Interface/article/Router";
import {Subscription} from "rxjs";
import {FormDataService} from "../../form-data.service";

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class RouterDataService {
  public router!: Router;
  private routerSubscription!: Subscription;

  constructor(
    private routerFormData: FormDataService // Use the FormDataService that deals with Router data
  ) {
    this.subscribeRouterForm();
  }

  private subscribeRouterForm() {
    this.routerSubscription = this.routerFormData.getFormData().subscribe(data => {
      this.router = this.formatFormToRouter(data);
    });
  }

  private formatFormToRouter(data: any): Router {
    let router: Router = {
      router_id: data?.router_id,
      imei: data?.imei,
      ip_adresse: data?.ip_adresse,
      benutzername: data?.benutzername,
      passwort: data?.passwort,
      iccid: data?.iccid,
      pin: data?.pin,
      puk: data?.puk
    }
    return router;
  }
}
