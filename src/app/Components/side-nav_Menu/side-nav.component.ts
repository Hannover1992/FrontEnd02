import {Project} from "../Inputs/project_input/project";
import {Component, DoCheck } from '@angular/core';
import {ProjectsService} from "../Tables/projectTable/service/projects.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import { AuthService } from '../user/service/auth.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements DoCheck {
  projects: Observable<Project[]>;
  menu_title = '';
  ismenurequired = false;
  isadminuser = false;
  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.projects = projectsService.projects
    this.projectsService.selectedProjectID.subscribe(project => {
      this.menu_title = project;
      this.menu_title = this.projectsService.selectedProjectStandort;
    });
    //toDo: add an icon, correspoinding to the table
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

  navigateToUsers() {
    this.router.navigate(['/users']);
  }
  //onInit() {
  //}
  navigateToHome() {
    this.router.navigate(['/home'])
  }
}
