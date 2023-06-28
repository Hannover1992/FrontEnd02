import { Injectable } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {BehaviorSubject} from "rxjs";
import {ProjectsService} from "../../../../../Tables/projectTable/service/projects.service";
import {Article} from "../../../../../../Interface/article";
import {Asset} from "../../../../../../Interface/asset";
import {MengeDataService} from "../Data/mengeData.service";
import {ArticleDataService} from "../Data/articleData.service";
import {AssetDataService} from "../Data/assetData.service";

@Injectable({
  providedIn: 'root'
})

export class ProjectArticleDataService {
  projectArticle: BehaviorSubject<ProjectArticle>  = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService:MengeDataService,
    private articleDataService:ArticleDataService,
    private assetDataService:AssetDataService
  ) {
  }

  public formatToProjectArticle(): ProjectArticle {
    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: this.mergeArticleAndAsset(this.articleDataService.article, this.assetDataService.asset),
    };

    return projectArticle;
  }

  private mergeArticleAndAsset(article: Article, asset: Asset): any {
    return {
      ...article, asset: asset
    }
  }

}
