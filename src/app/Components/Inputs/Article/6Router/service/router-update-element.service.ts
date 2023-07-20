import { Injectable } from '@angular/core';
import {UpdateElementServiceBaseService} from "../../1Base/article/service/update-element-service-base.service";

@Injectable({
  providedIn: 'root'
})
export class RouterUpdateElementService extends UpdateElementServiceBaseService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.router = {
      "router_id": tableObject.router_id,
      "imei": tableObject.imei,
      "ip_adresse": tableObject.ip_adresse,
      "benutzername": tableObject.benutzername,
      "passwort": tableObject.passwort,
      "iccid": tableObject.iccid,
      "pin": tableObject.pin,
      "puk": tableObject.puk,
    };
    return projectArticle;
  }
}
