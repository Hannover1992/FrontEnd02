import {Component, inject} from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-notification-project-erfolg',
  templateUrl: './notification-project-erfolg.component.html',
  styleUrls: ['./notification-project-erfolg.component.css']
})
export class NotificationProjectErfolgComponent {
  snackBarRef = inject(MatSnackBarRef);
}
