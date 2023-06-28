import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nummern-details',
  templateUrl: './nummern-details.component.html',
  styleUrls: ['../../../../../../shared_css/input.css']
})
export class NummernDetailsComponent {
  // [anlagenummer] ="element.anlagenummer",
  // [Inventarnummer] ="element.Inventarnummer">
    @Input () anlagenummer: string;
    // @Input () Inventarnummer: string;
    @Input () serriennummer: string;

    constructor() {
      this.anlagenummer = "";
      // this.Inventarnummer = "";
      this.serriennummer = "";
    }
}
