import { Injectable } from '@angular/core';
import {CurrentArticleAsset} from "./current-article-asset.service";
import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../../../Interface/article";
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {ArtikelFormDataService} from "../../../../Base/service/artikel-form-data.service";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {ProjectsService} from "../../../../../../Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../../../../../../Services/unter-kategorie.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectAssetArticle {

  projectAssetArticle: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});
  localProjectArticle: ProjectArticle = {};
  currentMenge: number = 0;

  constructor(
    private currentInputAssetService:CurrentArticleAsset,
    private artikelFormDataService:ArtikelFormDataService,
    private projectsService: ProjectsService,
  ) {
    this.setCurrentProject();

    artikelFormDataService.menge.subscribe((mengeData) => {
      this.localProjectArticle = this.projectAssetArticle.getValue();
      this.localProjectArticle.menge = mengeData;
      this.projectAssetArticle.next(this.localProjectArticle);
    });

    this.currentInputAssetService.erweiterterAssetArticle.subscribe((articleData) => {
      this.localProjectArticle.artikel = articleData;
      this.projectAssetArticle.next(this.localProjectArticle);
    });

    this.projectAssetArticle.subscribe((projectArticle) => {
      console.log(projectArticle);
    });
  }


  private setCurrentProject() {
    const projectArticle = this.projectAssetArticle.getValue();
    projectArticle.projekt_id = this.getCurrentProject();
    this.projectAssetArticle.next(projectArticle);
  }

  private getCurrentProject() : number {
    const proStr = this.projectsService.selectedProject.getValue();
    const project = parseInt(proStr);
    return project;
  }
}
