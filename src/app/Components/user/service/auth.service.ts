import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ServiceAccessTokenService} from "./service-access-token.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private serviceAccessTokenService:ServiceAccessTokenService
  ) { }
  apiurl='http://localhost:8080/user';

  login(credentials: any) {
    return this.http.post('http://localhost:8080/login', credentials)
      .pipe(
        tap((response: any) => {
          this.serviceAccessTokenService.set2FAAccessToken(response.pre2FAToken);
        })
      );
  }

  GetAllUsers() {
    return this.http.get('http://localhost:8080/allusers');
  }
  GetByCode(id: any) {
    return this.http.get(`http://localhost:8080/user/${id}`);
  }
  GetAllRole(){
    return this.http.get('http://localhost:8080/allRoles')
  }
  register(user: any) {
    return this.http.post('http://localhost:8080/user', user);
  }
  Proceedregister(inputdata:any){
    return this.http.post('http://localhost:8080/user', inputdata);
  }

  GetRoleById(id: any){
    return this.http.get(`http://localhost:8080/roles/${id}`);
  }

  UpdateUserStatus(id: any, inputData: any) {
    return this.http.put(`http://localhost:8080/updateStatus/${id}`, inputData);
  }

  Is2FA(){
    return this.serviceAccessTokenService.get2FAAccessToken() != '';
  }
  IsloggedIn(){
    return this.serviceAccessTokenService.getFullAccessToken() != '';
  }

  getUserrole() {
    return this.serviceAccessTokenService.getRole() != null ? this.serviceAccessTokenService.getRole()?.toString() : '';
  }

  enableTwoFactorAuth() {
    return this.http.post('http://localhost:8080/enable-2fa', {});
  }
/*
  verifyOTP(email: string, otp: string) {
    const payload = { email, otp };
    return this.http.post('http://localhost:8080/verify-otp', payload);
  }
  */
  verifyOTP(pre2FAToken: string, otp: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${pre2FAToken}`);
    const payload = { otp };
    return this.http.post('http://localhost:8080/verify-otp', payload, { headers })
      .pipe(
        tap((response: any) => {
          this.serviceAccessTokenService.setFullAccessToken(response.fullAccessToken);
        })
      );
  }
}

