import {Component, Inject} from '@angular/core';
import {
  ProjectInputFormComponent
} from "../button-input-project/dialog-create-new-project/project-input-form/project-input-form.component";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ProjectInterface} from "../project.interface";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ProjectService} from "../service/project.service";
import {ProjectsService} from "../../projects/service/projects.service";

@Component({
  selector: 'app-update-single-project',
  templateUrl: './update-single-project.component.html',
  styleUrls: ['./update-single-project.component.css']
})
export class UpdateSingleProjectComponent {

  project_to_update: ProjectInterface;

  primary_error: boolean = false;
  addressForm: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private projectService: ProjectService,
              private projectsService: ProjectsService,
              private dialog: MatDialog
              ) {
    this.project_to_update = data;
    console.log(data);
    this.addressForm = this.fb.group({
      project_details: this.fb.group({
        ID: [this.project_to_update.ID, Validators.compose(
          [Validators.required, Validators.pattern('^[0-9]*$'), this.customValidator.bind(this)]) ],
        Anlagenummer: [this.project_to_update.Anlagenummer, Validators.pattern('^[0-9]*$')],
        Standort:               [this.project_to_update.Standort],
        Niederlassung:          [this.project_to_update.Niederlassung],
        Auftragsart:            [this.project_to_update.Auftragsart],
        // Status:                 [this.project_to_update.Status],
        Status:                 [this.project_to_update.Status],
        Netto_Auftragswert:     [this.project_to_update.Netto_Auftragswert],
      }),

      datum: this.fb.group({
        Auftragsdatum: [this.project_to_update.Auftragsdatum],
        Startdatum: [this.project_to_update.Startdatum],
        Endtermin: [this.project_to_update.Endtermin],
      }),

      personal: this.fb.group({
        PM_1:                   [this.project_to_update.PM_1],
        PM_2:                   [this.project_to_update.PM_2],
        Logistikkoordinator:    [this.project_to_update.Logistikkoordinator],
        LK_1:                   [this.project_to_update.LK_1],
        LK_2:                   [this.project_to_update.LK_2],
        ZuKo:                   [this.project_to_update.ZuKo],
      }),

      Kommentar:  this.fb.group({
        Kommentar: [this.project_to_update.Kommentar],
      })
    });
    }

  // }

  customValidator(control: FormControl) {
    if (this.primary_error) {
      return { error: true };
    }
    return null;
  }

  onSubmit() {
    let project_to_send = this.create_an_project_to_send_from_the_form();
    this.projectService.update(project_to_send);
  }


  create_an_project_to_send_from_the_form() {
    //con... from ...details.ID "string to number"
    let ID = Number(              this.addressForm.value.project_details?.ID ?? 0);
    let Standort =                   this.addressForm.value.project_details?.Standort ?? '';
    let Niederlassung =              this.addressForm.value.project_details?.Niederlassung ?? '';
    let Auftragsart =                this.addressForm.value.project_details?.Auftragsart ?? '';
    let Status =                     this.addressForm.value.project_details?.Status ?? '';
    let Logistikkoordinator =        this.addressForm.value.personal?.Logistikkoordinator ?? '';
    let LK_1 =                       this.addressForm.value.personal?.LK_1 ?? '';
    let LK_2 =                       this.addressForm.value.personal?.LK_2 ?? '';
    let ZuKo =                       this.addressForm.value.personal?.ZuKo ?? '';
    let Auftragsdatum =              this.addressForm.value.datum?.Auftragsdatum ?? new Date();
    let Startdatum =                 this.addressForm.value.datum?.Startdatum ?? new Date();
    let Endtermin =                  this.addressForm.value.datum?.Endtermin ?? new Date();
    let Netto_Auftragswert =         this.addressForm.value.project_details?.Netto_Auftragswert ?? '';
    let Kommentar =                  this.addressForm.value.Kommentar?.Kommentar ?? '';
    let Anlagenummer = Number(  this.addressForm.value.project_details?.Anlagenummer ?? 0);
    let PM_1 =                       this.addressForm.value.personal?.PM_1 ?? '';
    let PM_2 =                       this.addressForm.value.personal?.PM_2 ?? '';


    let project_to_send : ProjectInterface = {
      ID: ID,
      Standort: Standort,
      Niederlassung: Niederlassung,
      Auftragsart: Auftragsart,
      Status: Status,
      Logistikkoordinator: Logistikkoordinator,
      LK_1: LK_1,
      LK_2: LK_2,
      ZuKo: ZuKo,
      Auftragsdatum: Auftragsdatum,
      Startdatum: Startdatum,
      Endtermin: Endtermin,
      Netto_Auftragswert: Netto_Auftragswert,
      Kommentar: Kommentar,
      Anlagenummer: Anlagenummer,
      PM_1: PM_1,
      PM_2: PM_2,
    };
    return project_to_send;
  }
}
