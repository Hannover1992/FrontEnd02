import { Component } from '@angular/core';
import {VaterComponent} from "../vater/vater.component";

@Component({
  selector: 'app-sohn',
  templateUrl: './sohn.component.html',
  styleUrls: ['./sohn.component.css']
})
export class SohnComponent  extends VaterComponent implements VaterComponent {

  constructor() {
    super();
  }

  onClick() : void {
    console.log("Sohn");
  }


}
