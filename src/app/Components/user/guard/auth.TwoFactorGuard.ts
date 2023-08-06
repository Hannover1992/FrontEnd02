import { CanActivateFn } from '@angular/router';
import {Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import {AuthService} from "../service/auth.service";
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class TwoFactorGuard  {

  constructor(private service: AuthService, private router: Router, private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if user needs to perform two-factor authentication
    if (this.service.Is2FA()) {
      return true;
    } else {
      console.log("tesssssstb 22222222222");
      this.router.navigate(['login']); // Or whatever your main/home page route is
      return false;
    }
  }
}
