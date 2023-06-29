import { Injectable } from '@angular/core';
import {UpdateElementServiceBaserService} from "../UpdateElementServiceBaserService";


@Injectable({
  providedIn: 'root'
})
export class AssetUpdateElementService extends UpdateElementServiceBaserService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.assets = {
      "ID": tableObject.ID,
      "Inventarnummer": tableObject.Inventarnummer,
    };
    return projectArticle;
  }

}
