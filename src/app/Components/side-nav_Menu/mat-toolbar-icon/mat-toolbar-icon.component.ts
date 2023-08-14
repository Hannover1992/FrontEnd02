import {
    Component, DoCheck,
    Input,
} from '@angular/core';
import {ProjectsService} from "../../Tables/projectTable/service/projects.service";
import {Router} from "@angular/router";
import {AuthService} from "../../user/service/auth.service";
import {KategorienWithSubkategorienService} from "../../../Services/kategorien-with-subkategorien.service";

@Component({
  selector: 'app-mat-toolbar-compose',
  templateUrl: './mat-toolbar-icon.component.html',
  styleUrls: ['./mat-toolbar-icon.component.css']
})
export class MatToolbarIconComponent implements DoCheck {
  get current_project(): string {
    return this._current_project;
  }
  @Input() drawerRef: any;

  ismenurequired = false;
  isadminuser = false;


  private _current_project = '';
  private _menu_icon: string = "Icon"


  set menu_icon(value: string) {
    this._menu_icon = value;
  }
  get menu_icon(): string {
    return this._menu_icon;
  }

  private readonly ICON_MAPPINGS: { [key: string]: string } = {
    // 'Projekt': 'travel_explore',
    'Projekt': 'warehouse',
    'Acu': 'dns',
    'Asset': 'front_loader',
    'Handy': 'phone_android',
    'Notebook': 'laptop_chromebook',
    'Router': 'router',
    'Simkarten': 'sim_card',
  };

  constructor(
      private projectsService: ProjectsService,
      private router: Router,
      private authService: AuthService,
      private kategorie_service: KategorienWithSubkategorienService,
  ) {

    this.projectsService.selectedProjectID.subscribe(project => {
      this._current_project = project;
      this._current_project = this.projectsService.selectedProjectStandort;
      this.setCurrentIcon();
      this.ngDoCheck()
    });
  }

  private setCurrentIcon(): void {
    this.kategorie_service.current_opened_table.subscribe(
        (current_kategory) => {
          let kategory_name = current_kategory || 'place_holder';
          this.menu_icon = this.getIconForKategory(kategory_name);
        }
    );
  }

  private getIconForKategory(kategory_name: string): string {
    return this.ICON_MAPPINGS[kategory_name] || 'Icon';
  }

  ngDoCheck():void {
    let currenturl = this.router.url;
    if(currenturl == '/login' || currenturl == '/register' ){
      this.ismenurequired=false;
    }else {
      this.ismenurequired=true;
    }
    if(this.authService.getUserrole()==='Admin'){
      this.isadminuser=true;
    }else{
      this.isadminuser=false;
    }
  }

  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  navigateToHome() {
    this.router.navigate(['/home'])
  }
}
