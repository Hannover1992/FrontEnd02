import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../Tables/projectTable/service/projects.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Initialization} from "./Specialization/input-form-asset/initialization";



@Component({
  selector: 'app-input-form-asset',
  templateUrl: './input-artikle-form.component.html',
  styleUrls: ['../../Tables/shared_css/input.css']
})


export class InputArtikelForm implements OnInit {

  artikelForm!: FormGroup;
  content: any;

  constructor(
    protected fb:                     FormBuilder,
    public    projectsService:        ProjectsService,
    private   dialog:                 MatDialog,
    private   _snackBar:              MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.artikelForm =  new Initialization(this.fb).initForm();
  }

  protected onSubmit() {
    // let projectArticle : ProjectArticle =  this.articleCreationService.create(this.artikelForm, this.projectsService);
    // this.assetTableService.create_new_asset(projectArticle);
    // this.dialog.closeAll();
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

