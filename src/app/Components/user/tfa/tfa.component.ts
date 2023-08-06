
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import {ServiceAccessTokenService} from "../service/service-access-token.service";
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-two-fa',
  templateUrl: './tfa.component.html',
  styleUrls: ['./tfa.component.scss']
})
export class TwoFactorAuth implements OnInit {
  qrCodeData: string = '';
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService,
    private serviceAccessTokenService:ServiceAccessTokenService
  ) {}

  otpForm = this.builder.group({
    otp: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern("^[0-9]*$")
      ]
    ]
  });

  ngOnInit(): void {
    const qrCodeDataFromStorage = sessionStorage.getItem('qrCodeData');
    this.qrCodeData = qrCodeDataFromStorage ? qrCodeDataFromStorage : '';

  }

  get otp(): any {
    return this.otpForm.get('otp');
  }

  verifyOtp() {
    if (this.otpForm.valid) {

      const accessToken = this.serviceAccessTokenService.get2FAAccessToken();
      if (accessToken) {
        this.authService.verifyOTP(accessToken, this.otp.value).subscribe(
          (response: any) => {
            sessionStorage.removeItem('qrCodeData');

            // OTP verification successful
            this.toastr.success('Two-Factor Authentication Successful!');
            // Proceed with user authentication and authorization logic

            // Redirect to the desired page or perform any other actions
            this.handleSuccessfulLogin(accessToken);
            this.serviceAccessTokenService.set2FAAccessToken('');
          },
          (error) => {
            // Error occurred during OTP verification
            this.toastr.error('An error occurred during OTP verification. Please try again later.');
          }
        );
      } else {
        // Access token not found
        this.toastr.error('Access token not found. Please login again.');
        this.router.navigate(['login']);
      }
    }
  }

  handleSuccessfulLogin(accessToken: string) {
    // Save the access token to the session storage ora token management library

    // Extract user data from the response
    const decodedToken: any = jwt_decode(accessToken);
    const id = decodedToken.id;
    const role = decodedToken.role;

    // Save user data to session storage or any other desired location

    this.serviceAccessTokenService.setRole(role);
    this.serviceAccessTokenService.setID(id);
    //sessionStorage.setItem('username', id);
   // sessionStorage.setItem('userrole', role);
    // Proceed with user authentication and authorization logic
    // ...

    // Redirect to the desired page or perform any other actions
    this.router.navigate(['home']);
  }
  numericOnly(event: KeyboardEvent): boolean { // restrict e and other non-numbers in input field
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }


}
