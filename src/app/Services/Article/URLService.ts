import {ProjectsService} from "../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../unter-kategorie.service";
import {URL} from "../../settings";

export class URLService {

  protected selected_project!: string;
  protected selected_unterkategorie!: string;
  private URL_Spec: String;

  constructor(protected projectsService: ProjectsService, public kategorieService: UnterKategorieService, URL_Spec: String){
   this.URL_Spec = URL_Spec;
  }


  generateGetURL() {
    return URL + '/' + this.URL_Spec + '/' + this.projectsService.selectedProject.getValue()
      + '/' + this.kategorieService.selectedUnterKategorie.getValue();
  }

  generateURL() {
    return URL + '/' + this.URL_Spec;
  }

  private delURL(projekt_artikel_id: number) {
    return URL + '/' + this.URL_Spec + '/' + projekt_artikel_id;
  }

  protected getDeleteUrl(projectArticleId: number): string {
    return this.delURL(projectArticleId);
  }
}
