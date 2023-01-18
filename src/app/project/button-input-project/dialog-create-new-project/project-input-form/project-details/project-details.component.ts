import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input() project_details: FormGroup;
  constructor( private fb: FormBuilder) {
    this.project_details = this.fb.group({
      ID:
        [null, Validators.compose(
          [Validators.required, Validators.pattern('^[0-9]*$')])
        ],
      Anlagenummer: [null, Validators.pattern('^[0-9]*$')],

      Standort:               [null],
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
  }

}
