import {Component, Input} from '@angular/core';
import {ServiceAccessTokenService} from "../../../user/service/service-access-token.service";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {

  constructor(
    private serviceAccessTokenService:ServiceAccessTokenService
  )
 {}

  logout() {
    this.serviceAccessTokenService.logout();
  }
}
