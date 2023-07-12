import { Injectable } from '@angular/core';
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {BehaviorSubject} from "rxjs";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {Article} from "../../../../../Interface/article";
import {Asset} from "../../../../../Interface/article/asset";
import {MengeDataService} from "../../1Base/menge/service/mengeData.service";
import {ArticleDataService} from "../../1Base/article/service/articleData.service";
import {AssetDataService} from "./assetData.service";
import {AssetUpdateElementService} from "./AssetUpdateElementService";

@Injectable()

export class ProjectAssetDataService {
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

  public formatToProjectAssetCreate(): ProjectArticle {
    let article : Article = this.articleDataService.article;
    let asset:Asset = this.assetDataService.asset;

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(asset && { assets: asset })
      }
    };

    return projectArticle;
  }

  //toDo: as next, first change name for specific asset implementaiton, then make tan base class
  //thath clas thath get bei nahe alles, and has some abstract class, thath make extend specifi, that is bastract, and inthis case ,
  //will be implement in this place, for making the abstract
  public formatToProjectAssetUpdate(): ProjectArticle {

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
        ...(asset && { assets: asset })
      }
    };

    return projectArticle;
  }

}
