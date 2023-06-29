import {Injectable, OnInit} from '@angular/core';
import {URL} from "../../settings";
import {ProjectsService} from "../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../unter-kategorie.service";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectArticle} from "../../Interface/projectArticle";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {TableService} from "./TableService";



@Injectable({
  providedIn: 'root'
})

export class AssetTableService extends TableService {

  public assets: BehaviorSubject<ProjectArticle[]> = new BehaviorSubject<ProjectArticle[]>([]);


  constructor(
              projectsService: ProjectsService,
              kategorieService: UnterKategorieService,
              private http: HttpClient,
              _snackBar: MatSnackBar,
              private dialog: MatDialog,
              ) {
    super(projectsService, kategorieService, 'projektArtikelAsset', _snackBar);
    super.subscribe_project_kategorie();
    this.read();
  }


  read(){
    this.http.get<any>(this.generateGetURL()).subscribe(
      (asset_arr) => this.assets.next(asset_arr));
  }

  create(newProjectArticle:ProjectArticle){
    this.http.post(this.generateURL(), newProjectArticle).subscribe(response => {
      this.read();
      this.displayCreateMessage()
      this.dialog.closeAll();
    }, error => {
      this.displayErrorMessage(error)
    });
  }


  public update(projectArticle: ProjectArticle) {
    this.http.put(this.generateURL(), projectArticle).subscribe(response => {
      this.read();
      this.diplayUpdateMessage();
      this.dialog.closeAll();
    }, error => {
      this.displayErrorMessage(error)
    });
  }

  async delete(projectArticle: ProjectArticle): Promise<void> {
    const projekt_artikel_id : any = projectArticle.projekt_artikel_id;
    this.http.delete(this.getDeleteUrl(projekt_artikel_id)).subscribe(response => {
      this.read();
      this.displayDeleteMessage();
      this.dialog.closeAll();
    } , error => {
      this.displayErrorMessage(error)
    });
  }

  private async deleteProjectArticle(projectArticle: ProjectArticle): Promise<void> {
    if(projectArticle.projekt_artikel_id) {
      await this.http.delete<ProjectArticle>(this.getDeleteUrl(projectArticle.projekt_artikel_id)).toPromise();
    }
  }


}

