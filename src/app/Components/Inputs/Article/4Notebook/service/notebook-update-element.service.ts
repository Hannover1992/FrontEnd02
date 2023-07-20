import { Injectable } from '@angular/core';
import {UpdateElementServiceBaseService} from "../../1Base/article/service/update-element-service-base.service";

@Injectable({
  providedIn: 'root'
})
export class NotebookUpdateElementService extends UpdateElementServiceBaseService {

  setExtendConvert(tableObject: any, projectArticle: any): any {
    projectArticle.artikel.notebook = {
      "notebook_id": tableObject.notebook_id,
      "admin_konto_name": tableObject.admin_konto_name,
      "admin_konto_password": tableObject.admin_konto_password,
      "user_konto_name": tableObject.user_konto_name,
      "user_konto_password": tableObject.user_konto_password,
    };
    return projectArticle;
  }
}
