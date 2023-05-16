import {Component, inject} from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent {
  snackBarRef = inject(MatSnackBarRef);
}
