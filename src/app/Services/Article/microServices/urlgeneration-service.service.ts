import { Injectable } from '@angular/core';
import {URL_DB} from "../../../settings";

@Injectable({
  providedIn: 'root'
})
export class URLGenerationServiceService {
  private URL_Spec: String;

  constructor(URL_Spec: String) {
    this.URL_Spec = URL_Spec;
  }


  generateGetURL(selectedProject: string, selectedUnterKategorie: string) {
    return URL_DB + '/' + this.URL_Spec + '/' + selectedProject
      + '/' + selectedUnterKategorie;
  }

  generateURL() {
    return URL_DB + '/' + this.URL_Spec;
  }

  private delURL(projekt_artikel_id: number) {
    return URL_DB + '/' + this.URL_Spec + '/' + projekt_artikel_id;
  }

  getDeleteUrl(projectArticleId: any): string {
    return this.delURL(projectArticleId);
  }
}
