import {Component, inject} from '@angular/core';
import {MatSnackBarRef} from "@angular/material/snack-bar";

//toDo: So aufgaben wie bei den Asset Table in Project
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  snackBarRef = inject(MatSnackBarRef);
}
