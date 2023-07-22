import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {MengeDataService} from "../../1Base/menge/service/mengeData.service";
import {ArticleDataService} from "../../1Base/article/service/articleData.service";
import {RouterDataService} from "./router-data.service";
import {RouterUpdateElementService} from "./router-update-element.service";
import {Article} from "../../../../../Interface/article";
import {Router} from "../../../../../Interface/article/Router";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RouterProjectDataService {
  projectArticle: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService: MengeDataService,
    private articleDataService: ArticleDataService,
    private routerDataService: RouterDataService,
    private updateElementService: RouterUpdateElementService,
  ) {
    if (this.updateElementService.isActivated()) {
      this.projectArticle.next(this.updateElementService.getProjectArticle() as ProjectArticle);
    }
  }

  public formatToProjectRouterCreate(): ProjectArticle {
    let article: Article = this.articleDataService.article;
    let router: Router = this.routerDataService.router;

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(router && {router: router})
      }
    };

    return projectArticle;
  }

  public formatToProjectRouterUpdate(): ProjectArticle {
    let proArtIDs: ProjectArticle | undefined = this.updateElementService.getProjectArticle();

    let article = this.articleDataService.article;
    let router = this.routerDataService.router;
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
        ...(router && {router: router})
      }
    };

    return projectArticle;
  }
}
