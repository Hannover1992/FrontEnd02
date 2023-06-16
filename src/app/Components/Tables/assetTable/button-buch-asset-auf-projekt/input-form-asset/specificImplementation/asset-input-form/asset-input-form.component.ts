import { Component } from '@angular/core';
import {InputArtikelForm} from "../../input-artikle-form.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectsService} from "../../../../../projectTable/service/projects.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {Util} from "../../services/util.service";
import {ArticleCreationService} from "../../services/article-creation.service";
import {ProjectArticle} from "../../../../Interface/projectArticle";
import {ErweiterterAssetCreationService} from "./services/erweiterter-asset-creation.service";

@Component({
  selector: 'app-asset-input-form',
  templateUrl: './asset-input-form.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class AssetInputFormComponent extends InputArtikelForm {

  extendedForm: FormGroup = this.extendedInit();

  constructor(
    fb: FormBuilder,
    projectsService: ProjectsService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    assetTableService: AssetTableService,
    util: Util,
    articleCreationService: ArticleCreationService,
    private erweiterterAssetCreationService: ErweiterterAssetCreationService
  ) {
    super(
      fb,
      projectsService,
      dialog,
      snackBar,
      assetTableService,
      util,
      articleCreationService
    );
  }

  protected extendedInit() {
    return this.fb.group({
      Inventarnummer: [''],
    })
  }

  // protected override onSubmit():  {
  //   // return super.onSubmit()    // let projectArticle : ProjectArticle =  this.articleCreationService.create(this.artikelForm, this.projectsService);
    // this.assetTableService.create_new_asset(projectArticle);
    // this.dialog.closeAll();;
  //   console.log("in sohn")
  // }


  onSubmitAsset(){
    let projectArticle : ProjectArticle =  this.erweiterterAssetCreationService.create(this.extendedForm, this.projectsService);
    console.log(projectArticle)
    // this.assetTableService.create_new_asset(projectArticle);
    // this.dialog.closeAll();
  }


}
