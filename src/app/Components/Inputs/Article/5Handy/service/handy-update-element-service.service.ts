import { Injectable } from '@angular/core';
import {UpdateElementServiceBaseService} from "../../1Base/article/service/update-element-service-base.service";

@Injectable({
  providedIn: 'root'
})
export class HandyUpdateElementService extends UpdateElementServiceBaseService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.handy = {
      "handy_id": tableObject.handy_id,
      "imei_1": tableObject.imei_1,
      "besitzer": tableObject.besitzer,
      "sim_karten_nummer": tableObject.sim_karten_nummer,
      "bildschirmsperre_pin": tableObject.bildschirmsperre_pin,
      "email_adresse": tableObject.email_adresse,
      "password": tableObject.password,
    };
    return projectArticle;
  }
}
