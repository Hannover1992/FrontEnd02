import { Injectable } from '@angular/core';
import {UpdateElementServiceBaseService} from "../../1Base/article/service/update-element-service-base.service";


@Injectable({
  providedIn: 'root'
})
export class AssetUpdateElementService extends UpdateElementServiceBaseService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.assets = {
      "ID": tableObject.ID,
      "Inventarnummer": tableObject.Inventarnummer,
    };
    return projectArticle;
  }

}
