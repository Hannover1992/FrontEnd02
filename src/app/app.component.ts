import {Component, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./Components/user/service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  ismenurequired = false;
  isadminuser = false;

  constructor(private router: Router, private service: AuthService) {

  }

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == '/login' || currenturl == '/register' || currenturl == '/tfa') {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
    if (this.service.getUserrole() === 'Admin') {
      this.isadminuser = true;
    } else {
      this.isadminuser = false;
    }
  }

  navigateToUsers() {
    this.router.navigate(['/users']);
  }
}



