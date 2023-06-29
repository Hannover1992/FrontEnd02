import {ProjectsService} from "../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../unter-kategorie.service";
import {URL} from "../../settings";
import {MatSnackBar} from "@angular/material/snack-bar";

export abstract class TableService {

  protected selected_project!: string;
  protected selected_unterkategorie!: string;
  private URL_Spec: String;

  constructor(
    protected projectsService: ProjectsService,
    public kategorieService: UnterKategorieService,
    URL_Spec: String,
    private _snackBar: MatSnackBar){
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

  protected getDeleteUrl(projectArticleId: any): string {
    return this.delURL(projectArticleId);
  }


  protected subscribe_project_kategorie() {
    this.subscribe_to_selected_project();
    this.subscribe_to_selected_kategorie();
  }

  private subscribe_to_selected_kategorie() {
    this.kategorieService.selectedUnterKategorie.subscribe(kategorie => {
      this.selected_unterkategorie = kategorie;
      this.read();
    })
  }

  private subscribe_to_selected_project() {
    this.projectsService.selectedProject.subscribe(project => {
      this.selected_project = project;
    });
  }

  protected abstract read() : void;


  protected diplayUpdateMessage(): void {
    const updateMessage = "Artikel wurde erfolgreich aktualisiert";
    this._snackBar.open(updateMessage, "OK");
  }

  protected displayCreateMessage(): void {
    const successMessage = "Artikel wurde erfolgreich hinzugefügt";
    this._snackBar.open(successMessage, "OK");
  }

  protected displayDeleteMessage(): void {
    const successMessage = "Artikel wurde erfolgreich entfernt";
    this._snackBar.open(successMessage, "OK");
  }

  protected displayErrorMessage(error: unknown): void {
    const errorMessage = this.getErrorMessage(error);
    this._snackBar.open(errorMessage, "OK");
  }

  private getErrorMessage(error: unknown): string {
    const defaultErrorMessage = 'An error occurred';
    return error instanceof Error ? error.message : defaultErrorMessage;
  }



}
