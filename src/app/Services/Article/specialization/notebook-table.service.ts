import { Injectable } from '@angular/core';
import {TableServiceCRUD} from "../TableServiceCRUD";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ProjectInteractionServiceService} from "../microServices/project-interaction-service.service";
import {SnackbarMessagingServiceService} from "../microServices/snackbar-messaging-service.service";
import {UnterKategorieService} from "../../unter-kategorie.service";
import {URLGenerationServiceService} from "../microServices/urlgeneration-service.service";

@Injectable({
  providedIn: 'root'
})
export class NotebookTableService extends TableServiceCRUD {

  constructor(
    http: HttpClient,
    dialog: MatDialog,
    projectInteractionService: ProjectInteractionServiceService,
    snackbarMessagingService: SnackbarMessagingServiceService,
    kategorieService: UnterKategorieService
  ) {
    const url_specification = 'projektArtikelNotebook';
    let urlGenerationService = new URLGenerationServiceService(url_specification);
    super(urlGenerationService, http, dialog, projectInteractionService, snackbarMessagingService);
    kategorieService.selectedUnterKategorie.subscribe(kategorie =>  this.read());
  }
}
