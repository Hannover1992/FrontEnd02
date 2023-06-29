import {Injectable, OnInit} from '@angular/core';
import {URL} from "../../settings";
import {ProjectsService} from "../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../unter-kategorie.service";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectArticle} from "../../Interface/projectArticle";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {URLService} from "./URLService";



@Injectable({
  providedIn: 'root'
})

export class AssetTableService extends URLService implements OnInit{

  public assets: BehaviorSubject<ProjectArticle[]> = new BehaviorSubject<ProjectArticle[]>([]);


  constructor(
              projectsService: ProjectsService,
              kategorieService: UnterKategorieService,
              private http: HttpClient,
              private _snackBar: MatSnackBar,
              private dialog: MatDialog,
              ) {
    super(projectsService, kategorieService, 'projektArtikelAsset');
    this.subscribe_project_kategorie();
    this.read();
  }

  ngOnInit() {
  }

  read(){
    this.http.get<any>(this.generateGetURL()).subscribe(
      (asset_arr) => this.assets.next(asset_arr));
  }


  private subscribe_project_kategorie() {
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


  create(newProjectArticle:ProjectArticle){
    this.http.post(this.generateURL(), newProjectArticle).subscribe(response => {
      this.read();
      this._snackBar.open("Artikel wurde erfolgreich hinzugefügt", "OK");
      this.dialog.closeAll();
    }, error => {
      this._snackBar.open(error.message, "OK");
    });
  }

  async delete(projectArticle: ProjectArticle): Promise<void> {
    try {
      await this.deleteProjectArticle(projectArticle);
      this.updateUIAfterSuccessfulDelete();
    } catch (error) {
      this.displayErrorMessage(error);
    }
  }

  private async deleteProjectArticle(projectArticle: ProjectArticle): Promise<void> {
    if(projectArticle.projekt_artikel_id) {
      await this.http.delete<ProjectArticle>(this.getDeleteUrl(projectArticle.projekt_artikel_id)).toPromise();
    }
  }

  private updateUIAfterSuccessfulDelete(): void {
    this.read();
    this.displaySuccessMessage();
  }

  private displaySuccessMessage(): void {
    const successMessage = "Artikel wurde erfolgreich entfernt";
    this._snackBar.open(successMessage, "OK");
  }

  private displayErrorMessage(error: unknown): void {
    const errorMessage = this.getErrorMessage(error);
    this._snackBar.open(errorMessage, "OK");
  }

  private getErrorMessage(error: unknown): string {
    const defaultErrorMessage = 'An error occurred';
    return error instanceof Error ? error.message : defaultErrorMessage;
  }

  update_asset(projectArticle: ProjectArticle) {
    this.http.put(this.generateURL(), projectArticle).subscribe(response => {
      this.read();
      this._snackBar.open("Artikel wurde erfolgreich aktualisiert", "OK");
      this.dialog.closeAll();
    }, error => {
      this._snackBar.open(error.message, "OK");
    });
  }
}

