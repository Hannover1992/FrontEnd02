import {URL_DB} from "../../../settings";

// @Injectable({
//   providedIn: 'root'
// })
export class URLGenerationServiceService {
  private URL_Spec: String;

  constructor(URL_Spec: String) {
    this.URL_Spec = URL_Spec;
  }


  generateGetURLProjectSpecific(selectedProject: string, selectedUnterKategorie: string) : string {
    return URL_DB + '/' + this.URL_Spec + '/' + selectedProject
      + '/' + selectedUnterKategorie;
  }

  generateGetURLProjectAll( selectedUnterKategorie: string) : string {
    return URL_DB + '/' + this.URL_Spec +
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
