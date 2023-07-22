import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {MengeDataService} from "../../1Base/menge/service/mengeData.service";
import {ArticleDataService} from "../../1Base/article/service/articleData.service";
import {AcuDataService} from "./acu-data.service";
import {AcuUpdateElementService} from "./acuUpdateElement.service";
import {Article} from "../../../../../Interface/article";
import {Acu} from "../../../../../Interface/article/Acu";

@Injectable({
  providedIn: 'root'
})
export class AcuProjectDataService {
  projectArticle: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService: MengeDataService,
    private articleDataService: ArticleDataService,
    private acuDataService: AcuDataService,  // Use AcuDataService here
    private updateElementService: AcuUpdateElementService, // Use AcuUpdateElementService here
  ) {
    if (this.updateElementService.isActivated()) {
      this.projectArticle.next(this.updateElementService.getProjectArticle() as ProjectArticle);
    }
  }

  public formatToProjectAcuCreate(): ProjectArticle {
    let article: Article = this.articleDataService.article;
    let acu: Acu = this.acuDataService.acu;  // Get Acu data here

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(acu && {acu: acu})  // Include Acu data here
      }
    };

    return projectArticle;
  }

  public formatToProjectAcuUpdate(): ProjectArticle {
    let proArtIDs: ProjectArticle | undefined = this.updateElementService.getProjectArticle();

    let article = this.articleDataService.article;
    let acu = this.acuDataService.acu;  // Get Acu data here
    if (proArtIDs === undefined) {
      throw new Error("project article is undefined");
    }

    let projectArticle: ProjectArticle = {
      projekt_artikel_id: proArtIDs.projekt_artikel_id,
      projekt_id: this.projectsService.getProjectID(),
      artikel_id: proArtIDs.artikel_id,

      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(acu && {acu: acu})  // Include Acu data here
      }
    };

    return projectArticle;
  }
}
