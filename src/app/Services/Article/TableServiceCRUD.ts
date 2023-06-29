import {BehaviorSubject} from "rxjs";
import {ProjectArticle} from "../../Interface/projectArticle";
import {URLGenerationServiceService} from "./microServices/urlgeneration-service.service";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {ProjectInteractionServiceService} from "./microServices/project-interaction-service.service";
import {SnackbarMessagingServiceService} from "./microServices/snackbar-messaging-service.service";

export class TableServiceCRUD {
  public assets: BehaviorSubject<ProjectArticle[]> = new BehaviorSubject<ProjectArticle[]>([]);
  urlGenerationService: URLGenerationServiceService;

  constructor(
    urlGenerationService: URLGenerationServiceService,
    protected http: HttpClient,
    protected dialog: MatDialog,
    protected projectInteractionService: ProjectInteractionServiceService,
    protected snackbarMessagingService: SnackbarMessagingServiceService
  ) {
    this.urlGenerationService = urlGenerationService;
  }

  read() {
    const url = this.urlGenerationService.generateGetURL(
      this.projectInteractionService.selected_project,
      this.projectInteractionService.selected_unterkategorie
    );
    this.http.get<any>(url).subscribe((asset_arr) => this.assets.next(asset_arr));
  }

  create(newProjectArticle: ProjectArticle) {
    const url = this.urlGenerationService.generateURL();
    this.http.post(url, newProjectArticle).subscribe(
      response => {
        this.read();
        this.snackbarMessagingService.displayCreateMessage();
        this.dialog.closeAll();
      },
      error => {
        this.snackbarMessagingService.displayErrorMessage(error);
      }
    );
  }

  public update(projectArticle: ProjectArticle) {
    const url = this.urlGenerationService.generateURL();
    this.http.put(url, projectArticle).subscribe(
      response => {
        this.read();
        this.snackbarMessagingService.diplayUpdateMessage();
        this.dialog.closeAll();
      },
      error => {
        this.snackbarMessagingService.displayErrorMessage(error);
      }
    );
  }

  delete(projectArticle: ProjectArticle) {
    const url = this.urlGenerationService.getDeleteUrl(projectArticle.projekt_artikel_id);
    this.http.delete(url).subscribe(
      response => {
        this.read();
        this.snackbarMessagingService.displayDeleteMessage();
        this.dialog.closeAll();
      },
      error => {
        this.snackbarMessagingService.displayErrorMessage(error);
      }
    );
  }
}
