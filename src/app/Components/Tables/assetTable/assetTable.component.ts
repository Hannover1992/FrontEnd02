import { Component } from '@angular/core';
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-asset-table',
  templateUrl: './assetTable.component.html',
  styleUrls: ['./assetTable.component.css']
})
export class AssetTableComponent {
  menu_title: any;

  constructor(
    public projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu_title = this.projectsService.selectedProject.getValue();
    this.projectsService.selectedProject.subscribe(project => {
      this.menu_title = project;
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const navigationState = this.router.getCurrentNavigation();
        if (navigationState && navigationState.extras.state) {
          this.unterkategoriename = navigationState.extras.state['unterkategoriename'];
          console.log(this.unterkategoriename)
        }
      });
  }

  unterkategoriename!: string;

  ngOnInit() {
  }

}
