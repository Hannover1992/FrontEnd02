import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-input-form',
  templateUrl: './project-input-form.component.html',
  styleUrls: ['./project-input-form.component.css']
})

export class ProjectInputFormComponent {
  // 0	Standort0	Niederlassung0	Auftragsart0	Status0	Logistikkoordinator0	LK_10	LK_20	ZuKo0	Jan 1, 1970	Jan 1, 1970	Jan 1, 1970	Netto_Auftragswert0	I'm Pickle Rick!	0	PM_10	PM_20
  receive_project_details_change($event: any) {
    this.addressForm.controls['project_details'].setValue($event);
  }

  addressForm = this.fb.group({
    project_details: this.fb.group({
      ID: [null, Validators.compose( [Validators.required, Validators.pattern('^[0-9]*$')]) ],
      Anlagenummer: [null, Validators.pattern('^[0-9]*$')],
      Standort:               [null],
      Niederlassung:          null,
      Auftragsart:            null,
      Status:                 null,
      Netto_Auftragswert:     null,
    }),

    datum: this.fb.group({
      Auftragsdatum: null,
      Startdatum: null,
      Endtermin: null,
    }),

    personal: this.fb.group({
      PM_1:                   null,
      PM_2:                   null,
      Logistikkoordinator:    null,
      LK_1:                   null,
      LK_2:                   null,
      ZuKo:                   null,
    }),

    Kommentar:  this.fb.group({
      Kommentar: null,
    })
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    let project_to_send = this.create_an_project_to_send_from_the_form();
    console.log(project_to_send);
    //toDo: send project_to_send to the server
    //toDo: if PRIMARY so show error message
  }

  create_an_project_to_send_from_the_form() {
    let ID = this.addressForm.value.project_details?.ID ?? 0;
    let Standort = this.addressForm.value.project_details?.Standort ?? '';
    let Niederlassung = this.addressForm.value.project_details?.Niederlassung ?? '';
    let Auftragsart = this.addressForm.value.project_details?.Auftragsart ?? '';
    let Status = this.addressForm.value.project_details?.Status ?? '';
    let Logistikkoordinator = this.addressForm.value.personal?.Logistikkoordinator ?? '';
    let LK_1 = this.addressForm.value.personal?.LK_1 ?? '';
    let LK_2 = this.addressForm.value.personal?.LK_2 ?? '';
    let ZuKo = this.addressForm.value.personal?.ZuKo ?? '';
    let Auftragsdatum = this.addressForm.value.datum?.Auftragsdatum ?? new Date();
    let Startdatum = this.addressForm.value.datum?.Startdatum ?? new Date();
    let Endtermin = this.addressForm.value.datum?.Endtermin ?? new Date();
    let Netto_Auftragswert = this.addressForm.value.project_details?.Netto_Auftragswert ?? '';
    let Kommentar = this.addressForm.value.Kommentar?.Kommentar ?? '';
    let Anlagenummer = this.addressForm.value.project_details?.Anlagenummer ?? 0;
    let PM_1 = this.addressForm.value.personal?.PM_1 ?? '';
    let PM_2 = this.addressForm.value.personal?.PM_2 ?? '';
    let detailRow = this.addressForm.value.Kommentar?.Kommentar ?? '';

    let project_to_send = {
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
      detailRow: detailRow
    };
    return project_to_send;
  }

}
