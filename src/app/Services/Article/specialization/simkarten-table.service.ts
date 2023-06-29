import {Injectable, OnInit} from '@angular/core';
import {URL_DB} from "../../../settings";
import {ProjectsService} from "../../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../../unter-kategorie.service";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../../Interface/projectArticle";
import {TableServiceCRUD} from "../TableServiceCRUD";
import {ProjectInteractionServiceService} from "../microServices/project-interaction-service.service";
import {SnackbarMessagingServiceService} from "../microServices/snackbar-messaging-service.service";
import {URLGenerationServiceService} from "../microServices/urlgeneration-service.service";

@Injectable({
  providedIn: 'root'
})
export class SimkartenTableService extends TableServiceCRUD {

  constructor(
    http: HttpClient,
    dialog: MatDialog,
    projectInteractionService: ProjectInteractionServiceService,
    snackbarMessagingService: SnackbarMessagingServiceService,
    kategorieService: UnterKategorieService
  ) {

    const url_specification = 'projektArtikelSimkarte';
    let urlGenerationService = new URLGenerationServiceService(url_specification);
    super(urlGenerationService, http, dialog, projectInteractionService, snackbarMessagingService);
    kategorieService.selectedUnterKategorie.subscribe(kategorie =>  this.read());
  }

}
