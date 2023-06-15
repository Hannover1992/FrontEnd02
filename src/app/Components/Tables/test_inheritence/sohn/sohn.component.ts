import { Component } from '@angular/core';
import {VaterComponent} from "../vater/vater.component";
import {SmallVaterHelperService} from "../vater/small-vater-helper.service";

@Component({
  selector: 'app-sohn',
  templateUrl: './sohn.component.html',
  styleUrls: ['./sohn.component.css']
})
//@ts-ignore
export class SohnComponent  extends VaterComponent implements VaterComponent, SmallVaterHelperService {


  constructor(smallVar : SmallVaterHelperService){
    super(smallVar);
  }

  onClick() : void {
    console.log("Sohn");
  }

  protected extendedInit(): void {
    console.log("Ich habe gerade der von Vater bereit gestellte Button , in den Sohn implementiert, und er wird von sohn aufgerufen , mit den Handen von Vater")
  }


}
