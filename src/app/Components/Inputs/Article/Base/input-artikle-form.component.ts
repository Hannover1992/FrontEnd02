import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../../Tables/projectTable/service/projects.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InitializationArticle} from "./initializationArticle";
import {ArtikelFormDataService} from "./service/artikel-form-data.service";



@Component({
  selector: 'app-input-form-asset',
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
    private artikelFormDataService:   ArtikelFormDataService
  ) {
  }

  ngOnInit(): void {
    this.artikelForm =  new InitializationArticle(this.fb).initForm();
    this.artikelForm.valueChanges.subscribe((data) =>
    {
      this.artikelFormDataService.article.next(data);
      this.artikelFormDataService.menge.next(data.menge);
    }
    )
  }

  // protected onSubmit() {
    // let projectArticle : ProjectArticle =  this.articleCreationService.create(this.artikelForm, this.projectsService);
    // this.assetTableService.create_new_asset(projectArticle);
    // this.dialog.closeAll();
  // }
}

