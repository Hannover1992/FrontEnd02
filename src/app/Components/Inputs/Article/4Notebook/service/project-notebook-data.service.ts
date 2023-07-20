import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {MengeDataService} from "../../1Base/menge/service/mengeData.service";
import {ArticleDataService} from "../../1Base/article/service/articleData.service";
import {NotebookDataService} from "./notebook-data.service";
import {NotebookUpdateElementService} from "./notebook-update-element.service";
import {Article} from "../../../../../Interface/article";
import {Notebook} from "../../../../../Interface/article/Notebook";

@Injectable({
  providedIn: 'root'
})
export class ProjectNotebookDataService {
  projectArticle: BehaviorSubject<ProjectArticle> = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService: MengeDataService,
    private articleDataService: ArticleDataService,
    private notebookDataService: NotebookDataService,
    private updateElementService: NotebookUpdateElementService,
  ) {
    if (this.updateElementService.isActivated()) {
      this.projectArticle.next(this.updateElementService.getProjectArticle() as ProjectArticle);
    }
  }

  public formatToProjectNotebookCreate(): ProjectArticle {
    let article: Article = this.articleDataService.article;
    let notebook: Notebook = this.notebookDataService.notebook;

    let projectArticle: ProjectArticle = {
      projekt_id: this.projectsService.getProjectID(),
      menge: this.mengeDataService.menge,
      artikel: {
        ...article,
        ...(notebook && {notebook: notebook})
      }
    };

    return projectArticle;
  }

  public formatToProjectNotebookUpdate(): ProjectArticle {
    let proArtIDs: ProjectArticle | undefined = this.updateElementService.getProjectArticle();

    let article = this.articleDataService.article;
    let notebook = this.notebookDataService.notebook;
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
        ...(notebook && {notebook: notebook})
      }
    };

    return projectArticle;

  }
}
