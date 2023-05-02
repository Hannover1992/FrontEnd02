import { Injectable } from '@angular/core';
import {URL} from "../../../../settings";
import {ProjectsService} from "../../projectTable/service/projects.service";
import {KategorieService} from "../../kategorie/kategorie.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProjectArticle} from "../../../Interface/projectArticle";

@Injectable({
  providedIn: 'root'
})

export class AssetTableService {

  private selected_project!: string;
  private selected_unterkategorie!: string;
  public assets: BehaviorSubject<ProjectArticle[]> = new BehaviorSubject<ProjectArticle[]>([]);

  constructor(
              private projectsService: ProjectsService,
              public kategorieService: KategorieService,
              private http: HttpClient
              ) {

    this.subscribe_project_kategorie();
    this.load_assets_from_database();
  }

  onInit() {
    this.load_assets_from_database();
  }

  load_assets_from_database(){
    this.http.get<any>(this.generateURL()).subscribe(
      (asset_arr) => {
        this.assets.next(asset_arr);
      });
  }

  print_status(){
   console.log(this.generateURL());
  }

  generateURL() {
    return URL + '/projekt_assets/'  + this.projectsService.selectedProject.getValue()
      + '/' + this.kategorieService.selectedKategorie.getValue();
    //toDo: create service, current selectd Kategorie
  }


  private subscribe_project_kategorie() {
    this.subscribe_to_selected_project();
    this.subscribe_to_selected_kategorie();
  }

  private subscribe_to_selected_kategorie() {
    this.kategorieService.selectedKategorie.subscribe(kategorie => {
      this.selected_unterkategorie = kategorie;
      this.load_assets_from_database();
    })
  }

  private subscribe_to_selected_project() {
    this.projectsService.selectedProject.subscribe(project => {
      this.selected_project = project;
    });
  }
}

