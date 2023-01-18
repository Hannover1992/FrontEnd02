import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-input-form',
  templateUrl: './project-input-form.component.html',
  styleUrls: ['./project-input-form.component.css']
})

export class ProjectInputFormComponent {
  // 0	Standort0	Niederlassung0	Auftragsart0	Status0	Logistikkoordinator0	LK_10	LK_20	ZuKo0	Jan 1, 1970	Jan 1, 1970	Jan 1, 1970	Netto_Auftragswert0	I'm Pickle Rick!	0	PM_10	PM_20
  addressForm = this.fb.group({
    ID:
      [null, Validators.compose(
      [Validators.required, Validators.pattern('^[0-9]*$')])
    ],
    Anlagenummer: [null, Validators.pattern('^[0-9]*$')],

    Standort:               null,
    Niederlassung:          null,
    Auftragsart:            null,
    Status:                 null,
    Netto_Auftragswert:     null,

    Auftragsdatum:          null,
    Startdatum:             null,
    Endtermin:              null,

    PM_1:                   null,
    PM_2:                   null,
    Logistikkoordinator:    null,
    LK_1:                   null,
    LK_2:                   null,
    ZuKo:                   null,

    Kommentar:              null,



    name: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
    console.log(this.addressForm.value);
  }

}
