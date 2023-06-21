import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../../Tables/projectTable/service/projects.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InitializationArticle} from "./initializationArticle";
import {ArtikelFormDataService} from "./service/artikel-form-data.service";
import {ProjectAssetArticle} from "../Specialization/asset/asset-compose/services/project-asset-article";



@Component({
  selector: 'app-input-form-artikel',
  templateUrl: './input-artikle-form.component.html',
  styleUrls: ['../../../shared_css/input.css']
})


export class InputArtikelForm implements OnInit {

  artikelForm!: FormGroup;
  content: any;

  constructor(
    protected fb:                     FormBuilder,
    public    projectsService:        ProjectsService,
    private   dialog:                 MatDialog,
    private   _snackBar:              MatSnackBar,
    private artikelFormDataService:   ArtikelFormDataService,
    private projectAssetArticle:      ProjectAssetArticle
  ) {
  }

  ngOnInit(): void {
    // this.projectAssetArticle.projectAssetArticle.subscribe((article) => {
    //   this.artikelForm =  new InitializationArticle(this.fb, article).initForm();
    // });
    this.artikelForm =  new InitializationArticle(this.fb).initForm();
    this.artikelForm.valueChanges.subscribe((data) =>
    {
      this.artikelFormDataService.article.next(data);
      this.artikelFormDataService.menge.next(data.asset_numbers.menge);
      this.artikelFormDataService.articleForm.next(this.artikelForm);
    }
    )
  }
}

