import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../service/auth.interceptor';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.scss'],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class UpdatepopupComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private dialog: MatDialogRef<UpdatepopupComponent>
  ) {}

  editdata: any;
  rolelist: any[] = [];

  ngOnInit(): void {
    this.service.GetAllRole().subscribe((res: any) => {
      this.rolelist = res;
    });

    if (this.data.usercode) {
      this.service.GetByCode(this.data.usercode).subscribe((res: any) => {
        this.editdata = res;
        this.registerform.patchValue(this.editdata);
      });
    }
  }

  registerform = this.builder.group({
    id: [''],
    name: [''],
    email: [''],
    role: ['', Validators.required],
    isActive: [false]
  });

  UpdateUser() {
    if (this.registerform.valid) {
      const id = this.registerform.value.id;
      const role = this.registerform.value.role;
      const isActive = this.registerform.value.isActive;

      const inputData = {
        role: role,
        isActive: isActive
      };

      this.service.UpdateUserStatus(id, inputData).subscribe(
        () => {
          this.toastr.success('Updated successfully.');
          this.dialog.close();
        },
        (error: any) => {
          console.error('Error updating user:', error);
          this.toastr.error('Failed to update user.');
        }
      );
    } else {
      this.toastr.warning('Please Select Role');
    }
  }
}
/*
* import { PrismaClient, User } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class UserAuth {
    prisma: PrismaClient;
    secretKey: string;

    constructor(prisma: PrismaClient, secretKey: string) {
        this.prisma = prisma;
        this.secretKey = secretKey;
    }

    async registerUser(name: string, email: string, password: string): Promise<User> {
        const existingUser = await this.prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        const newUser = await this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return newUser;
    }

    async loginUser(email: string, password: string): Promise<string | null> {
        try {
            const user = await this.prisma.user.findUnique({ where: { email } });
            if (!user) {
                return null; // User not found
            }

            const isPasswordValid = await bcrypt.compare(password, user.password); // Compare hashed passwords

            if (!isPasswordValid) {
                return null; // Invalid password
            }

            // Generate JWT token
            const token = jwt.sign({ email: user.email }, this.secretKey, { expiresIn: '1h' });

            return token; // Return JWT token
        } catch (error) {
            throw new Error("Failed to login user");
        }
    }

    async readUsers(): Promise<User[]> {
        try {
            const users = await this.prisma.user.findMany();
            return users;
        } catch (error) {
            throw new Error("Failed to fetch users");
        }
    }

    async getUserByEmail(email: string): Promise<User | null> {
        try {
            const user = await this.prisma.user.findUnique({ where: { email } });
            return user;
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    }
}
* */


/*
UpdateUser() {
    if (this.registerform.valid) {
      const id = this.registerform.value.id;
      const inputData = {
        role: this.registerform.value.role?.toString(), // Convert role to string
        isActive: this.registerform.value.isActive
      };

      this.service.UpdateUserStatus(id, inputData).subscribe(
        () => {
          this.toastr.success('Updated successfully.');
          this.dialog.close();
        },
        (error: any) => {
          console.error('Error updating user:', error);
          this.toastr.error('Failed to update user.');
        }
      );
    } else {
      this.toastr.warning('Please Select Role');
    }
  }
 */
