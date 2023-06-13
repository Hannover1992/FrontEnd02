import { Component } from '@angular/core';
import {InputArtikelForm} from "../../input-artikle-form.component";
import {FormBuilder} from "@angular/forms";
import {ProjectsService} from "../../../../../projectTable/service/projects.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {Util} from "../../services/util.service";
import {ArticleCreationService} from "../../services/article-creation.service";

@Component({
  selector: 'app-asset-input-form',
  templateUrl: './asset-input-form.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class AssetInputFormComponent extends InputArtikelForm {

  constructor(
    fb: FormBuilder,
    projectsService: ProjectsService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    assetTableService: AssetTableService,
    util: Util,
    articleCreationService: ArticleCreationService
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
}
