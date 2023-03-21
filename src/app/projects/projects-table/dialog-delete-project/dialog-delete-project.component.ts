import {Component, Inject} from '@angular/core';
import {ProjectInterface} from "../../../project/project.interface";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ProjectService} from "../../../project/service/project.service";
import {FailureComponent} from "../../../notification/failure/failure.component";
import {
  NotificationProjectSucessComponent
} from "../../../project/update-single-project/notification-project-sucess/notification-project-sucess.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SuccessComponent} from "../../../notification/success/success.component";

@Component({
  selector: 'app-dialog-delete-project',
  templateUrl: './dialog-delete-project.component.html',
  styleUrls: ['./dialog-delete-project.component.css']
})
export class DialogDeleteProjectComponent {

  project_to_delete: ProjectInterface;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private projectService: ProjectService,
              private dialog: MatDialog,
              private _snackBar: MatSnackBar
              ) {
    this.project_to_delete = data;
    console.log(data);

  }


  onSubmit() {
  }

  openNotificationSuccess() {
    this._snackBar.openFromComponent(SuccessComponent, {
      duration: 5 * 1000,
    });
  }

  openNotificationFailure() {
    this._snackBar.openFromComponent(FailureComponent, {
      duration: 5 * 1000,
    });
  }

  deleteProject() {
    this.projectService.delete(this.project_to_delete);
    this.openNotificationSuccess();
    //toDo: eintlich ich muss hier ein fehler werfen falls es nicht funktioniert hat.
  }
}
