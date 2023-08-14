import {Injectable, } from '@angular/core';
import {UnterKategorieService} from "../../unter-kategorie.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
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
    kategorieService.selectedUnterKategorie.subscribe(() =>  this.read_project_specific());
  }

}
