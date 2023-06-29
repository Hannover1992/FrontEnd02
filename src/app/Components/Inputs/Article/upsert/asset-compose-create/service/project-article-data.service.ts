import { Injectable } from '@angular/core';
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {BehaviorSubject} from "rxjs";
import {ProjectsService} from "../../../../../Tables/projectTable/service/projects.service";
import {Article} from "../../../../../../Interface/article";
import {Asset} from "../../../../../../Interface/asset";
import {MengeDataService} from "../Data/mengeData.service";
import {ArticleDataService} from "../Data/articleData.service";
import {AssetDataService} from "../Data/assetData.service";
import {AssetUpdateElementService} from "./updateService/update-element-service-base.service";

@Injectable()

// @Injectable({
//   providedIn: 'root'
// })

export class ProjectArticleDataService {
  projectArticle: BehaviorSubject<ProjectArticle>  = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService:MengeDataService,
    private articleDataService:ArticleDataService,
    private assetDataService:AssetDataService,
    private updateElementService:AssetUpdateElementService,
) {
    if(this.updateElementService.isActivated()) {
      this.projectArticle.next(this.updateElementService.getProjectArticle() as ProjectArticle);
    }
  }

  //toDo: has to set the activation on when going over the update,
  //toDo: set to off, when going over creat

  public formatToProjectArticleCreate(): ProjectArticle {
    let article = this.articleDataService.article;
    let asset = this.assetDataService.asset;

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        assets: asset
      }
    };

    return projectArticle;
  }

  //toDo: as next, first change name for specific asset implementaiton, then make tan base class
  //thath clas thath get bei nahe alles, and has some abstract class, thath make extend specifi, that is bastract, and inthis case ,
  //will be implement in this place, for making the abstract
  public formatToProjectArticleUpdate(): ProjectArticle {

    let proArtIDs  = this.projectArticle.getValue();
    let article = this.articleDataService.article;
    let asset = this.assetDataService.asset;

    let projectArticle: ProjectArticle = {

      projekt_artikel_id: proArtIDs.projekt_artikel_id,
      projekt_id: this.projectsService.getProjectID(),
      artikel_id: proArtIDs.artikel_id,

      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        assets: asset
      }
    };

    return projectArticle;
  }

  private mergeArticleAndAsset(article: Article, asset: Asset): any {
    return {
      ...article, asset: asset
    }
  }

}
