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

  }
}
