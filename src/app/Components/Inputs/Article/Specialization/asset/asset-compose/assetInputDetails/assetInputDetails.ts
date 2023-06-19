import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectsService} from "../../../../../../Tables/projectTable/service/projects.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AssetTableService} from "../../../../../../Services/asset-table.service";
import {ArticleCreationService} from "../../../../Base/service/article-creation.service";
import {ErweiterterAssetCreationService} from "./services/old/erweiterter-asset-creation.service";
import {Util} from "../../services/old/util.service";
import {ProjectArticle} from "../../../../../../Interface/projectArticle";
import {AssetInputDataService} from "./services/assetProject/asset-input-data.service";

@Component({
  selector: 'app-asset-input-form',
  templateUrl: './assetInputDetails.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class AssetInputDetails implements OnInit{

  assetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectsService: ProjectsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private assetTableService: AssetTableService,
    private util: Util,
    private articleCreationService: ArticleCreationService,
    private erweiterterAssetCreationService: ErweiterterAssetCreationService,
    private assetInputDataService : AssetInputDataService
  ) {

    this.assetForm = this.extendedInit();
  }

  ngOnInit() {
    this.assetForm.valueChanges.subscribe(
      (data) =>
      {
        this.assetInputDataService.assetInputFormData.next(data);
      }
    )
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
    let projectArticle : ProjectArticle =  this.erweiterterAssetCreationService.create(this.assetForm, this.projectsService);
    // console.log(projectArticle)
    this.assetTableService.create_new_asset(projectArticle);
    // this.dialog.closeAll();
  }


}
