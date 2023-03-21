import {Component, inject} from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-notification-project-sucess',
  templateUrl: './notification-project-sucess.component.html',
  styleUrls: ['./notification-project-sucess.component.css']
})
export class NotificationProjectSucessComponent {
  snackBarRef = inject(MatSnackBarRef);
}
