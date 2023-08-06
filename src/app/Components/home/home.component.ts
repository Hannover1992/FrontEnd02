import {Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../user/service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck{
  ismenurequired = false;
  isadminuser = false;
  constructor(private router: Router, private service:AuthService) {

  }
  ngDoCheck():void {
    let currenturl = this.router.url;
    if(currenturl == '/login' || currenturl == '/register' ){
      this.ismenurequired=false;
    }else {
      this.ismenurequired=true;
    }
    if(this.service.getUserrole()==='Admin'){
      this.isadminuser=true;
    }else{
      this.isadminuser=false;
    }
  }

}
