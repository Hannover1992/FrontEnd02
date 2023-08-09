import {Project} from "../Inputs/project_input/project";
import {Component, DoCheck } from '@angular/core';
import {ProjectsService} from "../Tables/projectTable/service/projects.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { AuthService } from '../user/service/auth.service';
import {KategorienWithSubkategorienService} from "../../Services/kategorien-with-subkategorien.service";
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent  {
}
