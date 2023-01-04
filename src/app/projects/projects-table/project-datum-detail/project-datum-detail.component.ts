import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-datum-detail',
  templateUrl: './project-datum-detail.component.html',
  styleUrls: ['./project-datum-detail.component.css']
})
export class ProjectDatumDetailComponent {

  @Input() Auftragsdatum: Date | null;
  // @Input() Startdatum: Date| null;
  // @Input() Endtermin: Date| null;
  //
  constructor() {
    this.Auftragsdatum = new Date(
      1992, 1, 1
    );
  //   this.Startdatum = new Date(
  //     1992, 1, 1
  //   );
  //   this.Endtermin = new Date(
  //     1992, 1, 1
  //   );
  }


}
