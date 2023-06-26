import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../../Tables/projectTable/service/projects.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InitializationArticle} from "./initializationArticle";
import {ArticleData} from "./service/article-data.service";
import {ProjectAssetArticle} from "../Specialization/asset/asset-compose/services/project-asset-article";
import {ArticleUpdateServiceService} from "./service/article-update-service.service";
import {ProjectArticle} from "../../../Interface/projectArticle";
import {Article} from "../../../Interface/article";



@Component({
  selector: 'app-input-form-artikel',
  templateUrl: './input-artikle-form.component.html',
  styleUrls: ['../../../shared_css/input.css']
})


export class InputArtikelForm implements OnInit {

  artikelForm!: FormGroup;
  content: any;

  constructor(
    protected fb:                       FormBuilder,
    public    projectsService:          ProjectsService,
    private   dialog:                   MatDialog,
    private   _snackBar:                MatSnackBar,

    private articleData:     ArticleData,
    private projectAssetArticle:ProjectAssetArticle,

    private articleUpdateServiceService:ArticleUpdateServiceService,
  ) {
  }

  ngOnInit(): void {
    // this.artikelForm = new FormGroup<any>({});
    this.subscribeToUpdateService();
    this.artikelForm.valueChanges.subscribe((data) =>
    {
      this.formValidation();
      this.articleData.article.next(data);
      this.articleData.menge.next(data.asset_numbers.menge);
    });

    this.artikelForm.valueChanges.subscribe((data) => {
      console.log(data);
    });

    this.formValidation();
  }

  private formValidation() {
    if (this.artikelForm.valid) {
      this.articleData.artikelFormValid.next(true);
    } else {
      this.articleData.artikelFormValid.next(false);
    }
  }

  subscribeToUpdateService() {
    let projectCurrentUpdateProjectArticle =    this.projectAssetArticle.projectAssetArticle.getValue();
    if (this.isArticleEmpty(projectCurrentUpdateProjectArticle)) {
      this.initializeArticleForm();
    } else {
      this.processProjectCurrentUpdateArticle(projectCurrentUpdateProjectArticle);
    }
  }

  isArticleEmpty(projectCurrentUpdateProjectArticle: ProjectArticle) {
    return Object.keys(projectCurrentUpdateProjectArticle).length === 0;
  }

  initializeArticleForm() {
    this.artikelForm = new InitializationArticle(this.fb).initForm();
  }

  processProjectCurrentUpdateArticle(projectCurrentUpdateProjectArticle: ProjectArticle) {
    console.log("projectCurrentUpdateProjectArticle", projectCurrentUpdateProjectArticle);
    this.initArticleFormWithProjectArticle(projectCurrentUpdateProjectArticle.artikel);
    this.verifyAndProcessArticle(projectCurrentUpdateProjectArticle.artikel);
  }

  initArticleFormWithProjectArticle(artikel: Article | undefined) {
    this.artikelForm = new InitializationArticle(this.fb, artikel).initForm();
  }

  verifyAndProcessArticle(artikel: Article | undefined) {
    if (artikel) {
      this.articleData.article.next(artikel);
    } else {
      throw new Error("There was no article to pass for the update asset");
    }
  }
}

