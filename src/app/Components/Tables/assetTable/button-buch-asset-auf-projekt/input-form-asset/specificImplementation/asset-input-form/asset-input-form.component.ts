import { Component } from '@angular/core';
import {InputArtikelForm} from "../../input-artikle-form.component";
import {FormBuilder} from "@angular/forms";
import {ProjectsService} from "../../../../../projectTable/service/projects.service";
import {UnterKategorieService} from "../../../../../../Services/unter-kategorie.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {FormInitializationService} from "../../services/form-initialization.service";

@Component({
  selector: 'app-asset-input-form',
  templateUrl: './asset-input-form.component.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class AssetInputFormComponent extends InputArtikelForm {

  constructor(
    fb: FormBuilder,
    projectsService: ProjectsService,
    unterKategorieService: UnterKategorieService,
    dialog: MatDialog,
    snackBar: MatSnackBar,
    assetTableService: AssetTableService
  ) {
    super(
      fb,
      projectsService,
      unterKategorieService,
      dialog,
      snackBar,
      assetTableService
    );
  }
}
