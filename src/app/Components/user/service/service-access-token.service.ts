import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccessTokenService {
  private pre2FA: string = '';
  private fullAccessToken: string = '';
  private role: string = '';
  private id:string = '';
  constructor() {
  }
  getID(){
    return this.id;
  }
  setID(id: string){
    this.id = id;
  }
  getRole(){
    return this.role;
  }
  setRole(role: string){
    this.role = role;
  }
  getFullAccessToken(){
    return this.fullAccessToken;
  }
  setFullAccessToken(accessToken: string){
    this.fullAccessToken = accessToken;
  }
  get2FAAccessToken(){
    return this.pre2FA;
  }

  set2FAAccessToken(accessToken: string){
    this.pre2FA = accessToken;
  }
  logout(){
    this.fullAccessToken = '';
    this.pre2FA = '';
    this.role = '';
    this.id = '';
  }
}
