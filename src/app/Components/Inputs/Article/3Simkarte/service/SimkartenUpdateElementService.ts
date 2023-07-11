import { Injectable } from '@angular/core';
import {UpdateElementServiceBaseService} from "../../1Base/article/service/update-element-service-base.service";

@Injectable({
  providedIn: 'root'
})
export class SimkartenUpdateElementService extends UpdateElementServiceBaseService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.simkarten = {
      "simkarten_id": tableObject.simkarten_id,
      "kundennummer": tableObject.kundennummer,
      "tarif": tableObject.tarif,
      "pin": tableObject.pin,
      "puk": tableObject.puk,
      "einsatzort": tableObject.einsatzort,
      "aktiv": tableObject.aktiv,
    };
    return projectArticle;
  }


}
