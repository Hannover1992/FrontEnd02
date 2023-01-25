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
    alert('Thanks!');
    console.log(this.addressForm.value);
  }

}
