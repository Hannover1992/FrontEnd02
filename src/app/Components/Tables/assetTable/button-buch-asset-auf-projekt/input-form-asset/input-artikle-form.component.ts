import { Component } from '@angular/core';
import {ProjectsService} from "../../../projectTable/service/projects.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProjectArticle} from "../../Interface/projectArticle";
import {AssetTableService} from "../../../../Services/asset-table.service";
import {Initialization} from "./initialization";
import {Util} from "./services/util.service";
import {ArticleCreationService} from "./services/article-creation.service";



@Component({
  selector: 'app-input-form-asset',
  templateUrl: './input-artikle-form.component.html',
  styleUrls: ['../../../shared_css/input.css']
})


export class InputArtikelForm {

  artikelForm: FormGroup = this.fb.group({});
  content: any;

  constructor(
    protected fb:                     FormBuilder,
    public    projectsService:        ProjectsService,
    private   dialog:                 MatDialog,
    private   _snackBar:              MatSnackBar,
    private   assetTableService:      AssetTableService,
    private   util:                   Util,
    private   articleCreationService: ArticleCreationService
  ) {
    this.artikelForm =  new Initialization(fb).initForm();
  }

  onSubmit() {
    let projectArticle : ProjectArticle =  this.articleCreationService.create(this.artikelForm, this.projectsService);
    this.assetTableService.create_new_asset(projectArticle);
    this.dialog.closeAll();
  }


  get assetDetails(): FormGroup {
    return this.artikelForm.get('asset_details') as FormGroup;
  }

  get assetDates(): FormGroup {
    return this.artikelForm.get('date_info') as FormGroup;
  }

  get assetNumbers(): FormGroup {
    return this.artikelForm.get('asset_numbers') as FormGroup;
  }

}

