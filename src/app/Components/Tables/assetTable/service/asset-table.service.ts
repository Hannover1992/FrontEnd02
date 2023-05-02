import { Injectable } from '@angular/core';
import {URL} from "../../../../settings";
import {ProjectsService} from "../../projectTable/service/projects.service";
import {KategorieService} from "../../kategorie/kategorie.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AssetTableService {
  private currents_selectd_projekt_id!: number;
  private selected_project!: string;
  private selected_unterkategorie!: string;
  private assets!: BehaviorSubject<any>;

  constructor(
              private projectsService: ProjectsService,
              public kategorieService: KategorieService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient
              ) {
    this.projectsService.selectedProject;
    this.kategorieService.selectedKategorie;
    this.subscribe_to_current_project_and_unterkategorie();
    this.get_the_current_unterkategorie_from_router_state();
    this.get_assets();
    this.print_statue();
  }

  print_statue(){
    console.log(this.projectsService.selectedProject.getValue() + " " + this.kategorieService.selectedKategorie.getValue());
  }


  generateURL() {
    // http://localhost:8080/projekt_assets/802007/Verkehrstechnik
    return URL + '/projekt_assets/'  + this.projectsService.selectedProject.getValue()
    + '/' + this.kategorieService.selectedKategorie.getValue();
    //toDo: create service, current selectd Kategorie
  }


  private get_the_current_unterkategorie_from_router_state() {
    let router_status;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const navigationState = this.router.getCurrentNavigation();
        if (navigationState && navigationState.extras.state) {
          router_status = navigationState.extras.state['unterkategoriename'];
          this.kategorieService.selectedKategorie.next(router_status);
        }
      });
  }

  private subscribe_to_current_project_and_unterkategorie() {
    this.projectsService.selectedProject.subscribe(project => {
      this.selected_project = project;
    });
    this.kategorieService.selectedKategorie.subscribe( kategorie => {
      this.selected_unterkategorie = kategorie;
    })
  }

  async get_assets() {
    await this.http.get<any>(this.generateURL()).subscribe(
      (asset_arr) => {
        this.assets = new BehaviorSubject<any>(asset_arr);
        console.log(asset_arr);
      });
  }
}
