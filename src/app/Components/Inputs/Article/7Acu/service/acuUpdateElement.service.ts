import { Injectable } from '@angular/core';
import {UpdateElementServiceBaseService} from "../../1Base/article/service/update-element-service-base.service";

@Injectable({
  providedIn: 'root'
})
export class AcuUpdateElementService extends UpdateElementServiceBaseService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.acu = {
      "acu_id": tableObject.acu_id,
      "router": tableObject.router,
      "ip_adresse": tableObject.ip_adresse,
    };
    return projectArticle;
  }
}
