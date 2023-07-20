import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {MengeDataService} from "../../1Base/menge/service/mengeData.service";
import {ArticleDataService} from "../../1Base/article/service/articleData.service";
import {HandyDataService} from "./handy-data.service";
import {HandyUpdateElementService} from "./handy-update-element-service.service";
import {Article} from "../../../../../Interface/article";
import {Handy} from "../../../../../Interface/article/Handy";

@Injectable({
  providedIn: 'root'
})
export class HandyProjectDataService {
  projectArticle: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService: MengeDataService,
    private articleDataService: ArticleDataService,
    private handyDataService: HandyDataService,
    private updateElementService: HandyUpdateElementService,
  ) {
    if (this.updateElementService.isActivated()) {
      this.projectArticle.next(this.updateElementService.getProjectArticle() as ProjectArticle);
    }
  }

  public formatToProjectHandyCreate(): ProjectArticle {
    let article: Article = this.articleDataService.article;
    let handy: Handy = this.handyDataService.handy;

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(handy && {handy: handy})
      }
    };

    return projectArticle;
  }

  public formatToProjectHandyUpdate(): ProjectArticle {
    let proArtIDs: ProjectArticle | undefined = this.updateElementService.getProjectArticle();

    let article = this.articleDataService.article;
    let handy = this.handyDataService.handy;
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
        ...(handy && {handy: handy})
      }
    };

    return projectArticle;
  }
}
