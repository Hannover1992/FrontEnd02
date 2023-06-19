import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectsService} from "../../../../../Tables/projectTable/service/projects.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssetTableService} from "../../../../../Services/asset-table.service";
import {ArticleCreationService} from "../../../Base/service/article-creation.service";
import {ErweiterterAssetCreationService} from "./services/erweiterter-asset-creation.service";
import {Util} from "../services/util.service";
import {ProjectArticle} from "../../../../../Interface/projectArticle";

@Component({
  selector: 'app-asset-input-form',
  templateUrl: './assetInputDetails.html',
  styleUrls: ['../../../../../shared_css/input.css']
})
export class AssetInputDetails {

  extendedForm: FormGroup = this.extendedInit();

  constructor(
    private fb: FormBuilder,
    private projectsService: ProjectsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private assetTableService: AssetTableService,
    private util: Util,
    private articleCreationService: ArticleCreationService,
    private erweiterterAssetCreationService: ErweiterterAssetCreationService
  ) { }

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
    this.assetTableService.create_new_asset(projectArticle);
    // this.dialog.closeAll();
  }


}
