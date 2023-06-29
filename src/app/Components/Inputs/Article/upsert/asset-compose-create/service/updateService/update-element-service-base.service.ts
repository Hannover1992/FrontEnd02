import {Inject, Injectable, Optional} from '@angular/core';
import {ProjectArticle} from "../../../../../../../Interface/projectArticle";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UpdateElementServiceBaseService} from "./specific/update-element-service-base.service";


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
