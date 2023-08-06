import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.builder.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
    confirmPassword: ['']
  }, { validators: this.passwordMatchValidator });

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }

  proceedRegistration() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (res) => {
          this.toastr.success('Please contact admin to enable access', 'Registered Successfully');
          this.router.navigate(['/login']);
        },
        (error) => {
          this.toastr.error('An error occurred during registration. Please try again later.');
          console.error(error);
        }
      );
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }
}
