import { CanActivateFn } from '@angular/router';
import {Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import { ServiceAccessTokenService } from '../service/service-access-token.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private serviceAccessTokenService:ServiceAccessTokenService
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceAccessTokenService.getFullAccessToken() !== '') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }

  }

}
/*
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
*/
