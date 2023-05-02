import { Component } from '@angular/core';
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {KategorieService} from "../kategorie/kategorie.service";

@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css']
})

export class AssetTableComponent {
  selected_project: any;
  selected_kategorie: any;

  constructor(
    public projectsService: ProjectsService,
    public kategorieService: KategorieService,
    private route: ActivatedRoute,
    private router: Router,
    public assetTableService: AssetTableService
  ) {
    this.subscribe_to_current_project_and_unterkategorie();
    this.get_the_current_unterkategorie_from_router_state();
    this.assetTableService.get_assets();
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
      this.selected_kategorie = kategorie;
    })
  }




  ngOnInit() {
  }

}
