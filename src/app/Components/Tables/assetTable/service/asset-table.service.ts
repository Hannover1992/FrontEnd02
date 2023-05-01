import { Injectable } from '@angular/core';
import {URL} from "../../../../settings";
import {ProjectsService} from "../../projectTable/service/projects.service";
import {KategorieService} from "../../kategorie/kategorie.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AssetTableService {
  private currents_selectd_projekt_id!: number;
  private selected_project!: string;
  private selected_unterkategorie!: string;

  constructor(private projectsService: ProjectsService,
              public kategorieService: KategorieService,
              private route: ActivatedRoute,
              private router: Router
              ) {
    this.projectsService.selectedProject;

    this.subscribe_to_current_project_and_unterkategorie();
    this.get_the_current_unterkategorie_from_router_state();
  }

  print_statue(){
    console.log(this.selected_project + " " + this.selected_unterkategorie )
  }


  generateURL() {
    return URL + '/assets' + '/' +  this.currents_selectd_projekt_id
    + '/' + this.selected_unterkategorie;
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

}
