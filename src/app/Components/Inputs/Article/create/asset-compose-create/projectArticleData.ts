import { Injectable } from '@angular/core';
import {ProjectArticle} from "../../../../Interface/projectArticle";
import {BehaviorSubject} from "rxjs";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {Article} from "../../../../Interface/article";
import {Asset} from "../../../../Interface/asset";
import {MengeDataService} from "./Data/mengeData.service";

@Injectable({
  providedIn: 'root'
})

export class ProjectArticleData {
  projectArticle: BehaviorSubject<ProjectArticle>  = new BehaviorSubject<ProjectArticle>({});

  constructor(
    private projectsService: ProjectsService,
    private mengeDataService:MengeDataService
  ) {
  }

  private getProjectID(){
    const projectID = this.projectsService.selectedProject.getValue();
    this.updateProjectID(projectID);
  }

  private updateProjectID(projectID: string) {
    let currentProjectArticle = this.projectArticle.value;
    const project_id = parseInt(projectID);
    let newProjectArticle: ProjectArticle = {...currentProjectArticle, projekt_id: project_id};
    this.projectArticle.next(newProjectArticle);
  }


  private formatToProjectArticle(article: Article, unterkategorieID: number, projectID: number): ProjectArticle {
    let projectArticle: ProjectArticle = {
      projekt_id: projectID,
      menge: this.mengeDataService.menge, //toDo Replace with actual value
      // artikel: this.mergeArticleAndAsset(article, this.asset),
    };

    return projectArticle;
  }

  private mergeArticleAndAsset(article: Article, asset: Asset): any {
    return {
      ...article, asset: asset
    }
  }

}
