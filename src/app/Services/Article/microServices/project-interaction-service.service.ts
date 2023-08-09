import { Injectable } from '@angular/core';
import {ProjectsService} from "../../../Components/Tables/projectTable/service/projects.service";
import {UnterKategorieService} from "../../unter-kategorie.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectInteractionServiceService {
  selected_project!: string;
  selected_unterkategorie!: string;
  selectd_unterkategorie_id!: number;

  constructor(
    protected projectsService: ProjectsService,
    public kategorieService: UnterKategorieService
  ) {
    this.subscribe_to_selected_project();
    this.subscribe_to_selected_kategorie();
    this.selectd_unterkategorie_id = this.kategorieService.getUnterKategorieID(this.selected_unterkategorie);
  }

  private subscribe_to_selected_kategorie() {
    this.kategorieService.selectedUnterKategorie.subscribe(kategorie => {
      this.selected_unterkategorie = kategorie;
    });
  }

  private subscribe_to_selected_project() {
    this.projectsService.selectedProjectID.subscribe(project => {
      this.selected_project = project;
    });
  }
}
