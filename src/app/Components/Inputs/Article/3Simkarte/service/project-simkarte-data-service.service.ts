import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {MengeDataService} from "../../1Base/menge/service/mengeData.service";
import {ArticleDataService} from "../../1Base/article/service/articleData.service";
import {SimkarteDataService} from "./simkarteData.service";
import {Article} from "../../../../../Interface/article";
import {SimkartenUpdateElementService} from "./SimkartenUpdateElementService";
import {Simkarten} from "../../../../../Interface/article/Simkarte";

@Injectable({
  providedIn: 'root'
})
export class ProjectSimkarteDataServiceService {
  projectArticle: BehaviorSubject<ProjectArticle>  = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService:MengeDataService,
    private articleDataService:ArticleDataService,
    private simkartenDataService:SimkarteDataService,
    private updateElementService:SimkartenUpdateElementService,
  ) {
    if(this.updateElementService.isActivated()) {
      this.projectArticle.next(this.updateElementService.getProjectArticle() as ProjectArticle);
    }
  }

  public formatToProjectSimkarteCreate(): ProjectArticle {
    let article : Article = this.articleDataService.article;
    let simkarte: Simkarten = this.simkartenDataService.simkarte;

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(simkarte && { simkarten: simkarte })
      }
    };

    console.log(projectArticle)

    //toDo: seaths o aus als hate ich erfolgreich das create form erstellt,
    //   als nechstes schauen bei der backend warum es nicht erstellt werden kann
    //
    // schau also, bei der create
    // method from Table service
    console.log(projectArticle)
    return projectArticle;
  }

  public formatToProjectSimkarteUpdate(): ProjectArticle {

    let proArtIDs  = this.projectArticle.getValue();
    let article = this.articleDataService.article;
    let simkarte = this.simkartenDataService.simkarte;

    let projectArticle: ProjectArticle = {

      projekt_artikel_id: proArtIDs.projekt_artikel_id,
      projekt_id: this.projectsService.getProjectID(),
      artikel_id: proArtIDs.artikel_id,

      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(simkarte && { simkarten: simkarte })
      }
    };

    return projectArticle;
  }
}
