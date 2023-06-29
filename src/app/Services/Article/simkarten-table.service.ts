import {Injectable, OnInit} from '@angular/core';
import {URL_DB} from "../../settings";
import {ProjectsService} from "../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../unter-kategorie.service";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../Interface/projectArticle";

@Injectable({
  providedIn: 'root'
})
export class SimkartenTableService {

  constructor(
  ) {
  }

}
