import { Injectable } from '@angular/core';
import {CurrentArticleAsset} from "./current-article-asset.service";
import {BehaviorSubject} from "rxjs";
import {Article} from "../../../../../../../Interface/article";
import {ProjectArticle} from "../../../../../../../Interface/projectArticle";
import {ArticleData} from "../../../../Base/service/article-data.service";
import {AssetTableService} from "../../../../../../../Services/asset-table.service";
import {ProjectsService} from "../../../../../../../Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../../../../../../../Services/unter-kategorie.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectAssetArticle {

  projectAssetArticle: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});
  localProjectArticle: ProjectArticle = {};

  constructor(
    private currentInputAssetService:CurrentArticleAsset,
    private artikelFormDataService:ArticleData,
    private projectsService: ProjectsService,
  ) {
    this.setCurrentProject();

    artikelFormDataService.menge.subscribe((mengeData) => {
      this.localProjectArticle = this.projectAssetArticle.getValue();
      this.localProjectArticle.menge = mengeData;
      this.projectAssetArticle.next(this.localProjectArticle);
    });

    this.currentInputAssetService.umAssetErweiterterArticle.subscribe((articleData) => {
      this.localProjectArticle.artikel = articleData;
      this.projectAssetArticle.next(this.localProjectArticle);
    });

  }

  public restart(){
    this.projectAssetArticle.next({})
    this.localProjectArticle = {};
    this.currentInputAssetService.restart();
    this.setCurrentProject();
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

  rekursivSetzen(projectArticle: any) {
    this.projectAssetArticle.next(projectArticle);
    this.localProjectArticle = projectArticle;

    this.currentInputAssetService.rekursivSetzen(projectArticle.artikel);


    this.artikelFormDataService.rekusivSetzen(projectArticle.artikel, projectArticle.menge);

  }
}
