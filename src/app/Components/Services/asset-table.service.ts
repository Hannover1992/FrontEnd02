import { Injectable } from '@angular/core';
import {URL} from "../../settings";
import {ProjectsService} from "../Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "./unter-kategorie.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectArticle} from "../Tables/assetTable/Interface/projectArticle";
import {Project} from "../Tables/project/project";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProjectInterface} from "../Tables/project/project.interface";


@Injectable({
  providedIn: 'root'
})

export class AssetTableService {

  private selected_project!: string;
  private selected_unterkategorie!: string;
  public assets: BehaviorSubject<ProjectArticle[]> = new BehaviorSubject<ProjectArticle[]>([]);
  public notifyThatDataChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
              private projectsService: ProjectsService,
              public kategorieService: UnterKategorieService,
              private http: HttpClient,
              private _snackBar: MatSnackBar
              ) {
    this.subscribe_project_kategorie();
    this.load_assets_from_database();
  }

  onInit() {
    this.load_assets_from_database();
  }

  load_assets_from_database(){
    this.http.get<any>(this.generateURL()).subscribe(
      (asset_arr) => {
        console.log(asset_arr[0])
        this.assets.next(asset_arr);
        // console.log(asset_arr);
        console.log(this.generateURL());
      });
  }

  create_new_asset(newProjectArticle:ProjectArticle){
    this.http.post(this.generate_URL_Post(), newProjectArticle).subscribe(response => {
      this.load_assets_from_database();
      this._snackBar.open("Artikel wurde erfolgreich hinzugefügt", "OK");
    }, error => {
      this._snackBar.open(error.message, "OK");
    });
  }

  // async delete(project: ProjectInterface) {
  //   //toDo: wenn irgendetwas is bereits auf diesen Projekt gebucht so kann man das nicht Projet loschen, uberligt dir eine Fehlermeldung
  //   this.http.delete<ProjectInterface>(this.delURL(project.ID))
  //     .subscribe((response) => {
  //       //@ts-ignore
  //       if(response.message === 'Project deleted') {
  //         this.projects_error_subject.next(false);
  //         this.projectsService.getProjects();
  //       }} , (error) => {
  //       this.projects_error_subject.next(true);
  //       throw error;
  //     });
  // }

  async delete(projectArticle: ProjectArticle): Promise<void> {
    try {
      await this.deleteProjectArticle(projectArticle);
      this.updateUIAfterSuccessfulDelete();
    } catch (error) {
      this.handleDeleteError(error);
    }
  }

  private async deleteProjectArticle(projectArticle: ProjectArticle): Promise<void> {
    await this.http.delete<ProjectArticle>(this.getDeleteUrl(projectArticle.projekt_artikel_id)).toPromise();
  }

  private getDeleteUrl(projectArticleId: number): string {
    return this.delURL(projectArticleId);
  }

  private updateUIAfterSuccessfulDelete(): void {
    this.load_assets_from_database();
    this.displaySuccessMessage();
  }

  private displaySuccessMessage(): void {
    const successMessage = "Artikel wurde erfolgreich entfernt";
    this._snackBar.open(successMessage, "OK");
  }

  private handleDeleteError(error: unknown): void {
    const errorMessage = this.getErrorMessage(error);
    this._snackBar.open(errorMessage, "OK");
  }

  private getErrorMessage(error: unknown): string {
    const defaultErrorMessage = 'An error occurred';
    return error instanceof Error ? error.message : defaultErrorMessage;
  }

  // create_new_project_Artikel(projectArticle: ProjectArticle){
  //   this.http.post<ProjectArticle>
  // }

  print_status(){
   console.log(this.generateURL());
  }

  generateURL() {
    return URL + '/projekt_assets/'  + this.projectsService.selectedProject.getValue()
      + '/' + this.kategorieService.selectedUnterKategorie.getValue();
  }

  generate_URL_Post(){
    return URL + '/projektArtikelAsset';
  }


  private subscribe_project_kategorie() {
    this.subscribe_to_selected_project();
    this.subscribe_to_selected_kategorie();
  }

  private subscribe_to_selected_kategorie() {
    this.kategorieService.selectedUnterKategorie.subscribe(kategorie => {
      this.selected_unterkategorie = kategorie;
      this.load_assets_from_database();
    })
  }

  private subscribe_to_selected_project() {
    this.projectsService.selectedProject.subscribe(project => {
      this.selected_project = project;
    });
  }

  private delURL(projekt_artikel_id: number) {
      return URL + '/projektArtikelAsset/' + projekt_artikel_id;
  }
}

