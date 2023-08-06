import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../service/auth.interceptor';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss'],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class UserlistingComponent implements AfterViewInit {
  constructor(private service: AuthService, private dialog: MatDialog) {}

  userlist: any[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [
    'name',
    'email',
    'role',
    'status',
    'action' // Added 'action' column
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.Loaduser();
  }

  Loaduser() {
    this.service.GetAllUsers().subscribe(
      (res: any) => {
        this.userlist = res;
        this.dataSource.data = this.userlist;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: any) => {
        console.error('Error loading users:', error);
      }
    );
  }

  UpdateUser(code: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        usercode: code,
      },
    });
    popup.afterClosed().subscribe((res) => {
      this.Loaduser();
    });
  }
}

