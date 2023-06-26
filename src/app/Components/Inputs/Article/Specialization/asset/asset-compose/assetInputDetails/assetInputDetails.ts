import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectsService} from "../../../../../../Tables/projectTable/service/projects.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {ArticleCreationService} from "../../../../Base/service/old/article-creation.service";
import {ErweiterterAssetCreationService} from "../services/old/erweiterter-asset-creation.service";
import {Util} from "../services/old/util.service";
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {AssetData} from "../services/asset/asset-data.service";
import {Asset} from "../../../../../../Interface/asset";

@Component({
  selector: 'app-asset-input-form',
  templateUrl: './assetInputDetails.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class AssetInputDetails implements OnInit{

  assetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectsService: ProjectsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private assetTableService: AssetTableService,
    private util: Util,
    private articleCreationService: ArticleCreationService,
    private erweiterterAssetCreationService: ErweiterterAssetCreationService,
    private assetInputDataService : AssetData
  ) {

  }

  ngOnInit() {
    this.subscribeToUpdateService();
    this.assetForm.valueChanges.subscribe(
      (data) =>
      {
        this.assetInputDataService.assetData.next(data);
      }
    )
  }


  subscribeToUpdateService() {
    this.assetInputDataService.assetData.subscribe((projectCurrentUpdateProjectAsset) => {
      if (this.isAssetEmpty(projectCurrentUpdateProjectAsset)) {
        this.initializeAssetForm();
      } else {
        this.processProjectCurrentUpdateAsset(projectCurrentUpdateProjectAsset);
      }
    });
  }

  isAssetEmpty(projectCurrentUpdateProjectArticle: Asset) {
    return Object.keys(projectCurrentUpdateProjectArticle).length === 0;
  }

  initializeAssetForm() {
    this.assetForm = this.extendedInit();
  }


  private processProjectCurrentUpdateAsset(projectCurrentUpdateProjectAsset: Asset) {
    console.log("projectCurrentUpdateProjectArticle", projectCurrentUpdateProjectAsset);
    this.initArticleFormWithProjectAsset(projectCurrentUpdateProjectAsset);
    this.verifyAndProcessAsset(projectCurrentUpdateProjectAsset);
  }

  private initArticleFormWithProjectAsset(projectCurrentUpdateProjectAsset: Asset) {
    this.assetForm =  this.fb.group({
      ID: [projectCurrentUpdateProjectAsset ? projectCurrentUpdateProjectAsset.ID : ''],
      Inventarnummer: [projectCurrentUpdateProjectAsset ? projectCurrentUpdateProjectAsset.Inventarnummer : ''],
    });
  }


  protected extendedInit() {
    return this.fb.group({
      ID: [''],
      Inventarnummer: [''],
    })
  }

  private verifyAndProcessAsset(projectCurrentUpdateProjectAsset: Asset) {

    if (projectCurrentUpdateProjectAsset) {
    } else {
      throw new Error("There was no asset to pass for the update asset");
    }
  }
}

// onSubmitAsset(){
//   let projectArticle : ProjectArticle =  this.erweiterterAssetCreationService.create(this.assetForm, this.projectsService);
//   // console.log(projectArticle)
//   this.assetTableService.create_new_asset(projectArticle);
//   // this.dialog.closeAll();
// }
