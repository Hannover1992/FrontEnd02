import {Project} from "../Inputs/project_input/project";
import {Component, DoCheck} from '@angular/core';
import {ProjectsService} from "../Tables/projectTable/service/projects.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { AuthService } from '../user/service/auth.service';
import {ServiceAccessTokenService} from "../user/service/service-access-token.service";
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements DoCheck {
  projects: Observable<Project[]>;
  myControl: any;
  filteredOptions: any  ;
  menu_title = '';
  ismenurequired = false;
  isadminuser = false;
  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private authService: AuthService,
    private serviceAccessTokenService:ServiceAccessTokenService
  ) {
    this.projects = projectsService.projects
    this.projectsService.selectedProject.subscribe(project => {
      this.menu_title = project;

    });
    //this.role = this.authService.getUserrole();
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
  logout() {
    // Clear local and session storage
    localStorage.clear();
    sessionStorage.clear();
    this.serviceAccessTokenService.logout();


    this.router.navigate(['/login']);
  }

  navigateToUsers() {
    this.router.navigate(['/users']);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  //onInit() {
  //}
}
