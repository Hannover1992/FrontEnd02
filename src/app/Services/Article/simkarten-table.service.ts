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
export class SimkartenTableService implements OnInit {


  public simkarten: BehaviorSubject<ProjectArticle[]> = new BehaviorSubject<ProjectArticle[]>([]);
  private URL_Spec = 'projektArtikelSimkarte'

  private selected_project!: string;
  private selected_unterkategorie!: string;

  constructor(
    private projectsService: ProjectsService,
    public kategorieService: UnterKategorieService,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
  ) {
    this.subscribe_project_kategorie();
    this.read();
  }

  ngOnInit(){
    this.read();
  }


  read(){
    this.http.get<any>(this.generateGetURL()).subscribe(
      (sim_arr) => this.simkarten.next(sim_arr)
      );
  }

  generateGetURL() {
    return URL_DB + '/' +  this.URL_Spec + '/'  + this.projectsService.selectedProject.getValue()
      + '/' + this.kategorieService.selectedUnterKategorie.getValue();
  }

  private subscribe_project_kategorie() {
    this.subscribe_to_selected_project();
    this.subscribe_to_selected_kategorie();
  }

  private subscribe_to_selected_kategorie() {
    this.kategorieService.selectedUnterKategorie.subscribe(kategorie => {
      this.selected_unterkategorie = kategorie;
      this.read();
    })
  }

  private subscribe_to_selected_project() {
    this.projectsService.selectedProject.subscribe(project => {
      this.selected_project = project;
    });
  }
}
