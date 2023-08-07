import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import {ServiceAccessTokenService} from "../service/service-access-token.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  twoFactorEnabled = true;
  qrCodeData: string = '';

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private serviceAccessTokenService:ServiceAccessTokenService
  ) {}

  loginForm = this.builder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    otp: ['']
  });
  otpForm = this.builder.group({
    otp: ['', [Validators.required]]
  });
  ngOnInit(): void {
   // sessionStorage.clear();

  }

  get username(): any {
    return this.loginForm.get('username');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  get otp(): any {
    return this.loginForm.get('otp');
  }
/*
  enableTwoFactorAuth() {
    this.authService.enableTwoFactorAuth().subscribe(
      (response: any) => {
        this.qrCodeData = response.otpAuthUrl;
      },
      (error) => {
        this.toastr.error('Failed to enable two-factor authentication. Please try again later.');
      }
    );
  }
*/
  proceedlogin() {
    if (this.loginForm.valid) {
      const credentials = {
        email: this.username.value,
        password: this.password.value
      };

          this.authService.login(credentials).subscribe(
            (response: any) => {

              if (response.success && response.pre2FAToken) {
                this.serviceAccessTokenService.set2FAAccessToken(response.pre2FAToken);


                // Navigate to the dashboard or home page
                if (response.message === "OTP required for 2FA verification") {
                  this.router.navigate(['tfa']);

                } else if(response.message === "Two-factor auth enabled"){

                  sessionStorage.setItem('qrCodeData', response.qrCodeData);

                  this.router.navigate(['tfa']);
                }

              }
        },
        (error) => {
          // Handle login error
          if (error.status === 400 || error.status === 401 || error.status === 500) {
            this.toastr.error(error.error.message); // Display the specific error message from the server
          } else {
            this.toastr.error('An error occurred. Please try again later.');
          }
        }
      );
    }
  }
/*
  private generateQRCode() {
    const data = 'Your QR code data'; // Replace with the data you want to encode

    QRCode.toDataURL(data, (err, url) => {
      if (err) {
        // Handle error
      } else {
        this.qrCodeData = url; // Assign the QR code URL to the qrCodeData property
      }
    });
  }*/
}
