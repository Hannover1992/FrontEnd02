import { Component } from '@angular/core';
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {UnterKategorieService} from "../../../../../Services/unter-kategorie.service";
import {ProjectsService} from "../../../../../Tables/projectTable/service/projects.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['../../../../../shared_css/input.css'],
})
export class ControlComponent {


  //toDo: dass passt, da die Form getrennt von den Eigentlichen Artikeln, und ProjectArticeln sind
  //toDO: so werden es 3 Schritte.
  //toDo; als ersters, get the current data from asset form create Asset
  //toDO; get current Data from Article Form and Create ARticle
  //toDo: get current Data from ProjectArticle Form and Create ProjectArticle
  //toDo: the submite
  constructor(
  ){
  }

  onSubmit() {

  }

  close_window() {

  }

}
