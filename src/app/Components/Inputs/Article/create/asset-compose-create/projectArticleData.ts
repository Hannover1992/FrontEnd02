import { Injectable } from '@angular/core';
import {ProjectArticle} from "../../../../Interface/projectArticle";
import {BehaviorSubject} from "rxjs";
import {ProjectsService} from "../../../../Tables/projectTable/service/projects.service";
import {Article} from "../../../../Interface/article";
import {Asset} from "../../../../Interface/asset";

@Injectable({
  providedIn: 'root'
})

export class ProjectArticleData {
  projectArticle: BehaviorSubject<ProjectArticle>  = new BehaviorSubject<ProjectArticle>({});
  menge: BehaviorSubject<number>               = new BehaviorSubject<number>(1);

  constructor(
    private projectsService: ProjectsService,
  ) {
    this.subscribeProjectID();
  }

  private subscribeProjectID() {
    this.projectsService.selectedProject.subscribe(
      (projectID) => {
        this.updateProjectID(projectID);
      });
  }

  private updateProjectID(projectID: string) {
    let currentProjectArticle = this.projectArticle.value;
    const project_id = parseInt(projectID);
    let newProjectArticle: ProjectArticle = {...currentProjectArticle, projekt_id: project_id};
    this.projectArticle.next(newProjectArticle);
  }


  // private formatToProjectArticle(article: Article, unterkategorieID: number, projectID: number): ProjectArticle {
  //   let projectArticle: ProjectArticle = {
  //     projekt_id: projectID,
  //     menge: article.menge, //toDo Replace with actual value
  //     artikel: this.mergeArticleAndAsset(article, this.asset),
  //   };
  //
  //   return projectArticle;
  // }

  private mergeArticleAndAsset(article: Article, asset: Asset): any {
    return {
      ...article, asset: asset
    }
  }

}
