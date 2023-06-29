import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class SnackbarMessagingServiceService {
  constructor(private _snackBar: MatSnackBar) {}

  diplayUpdateMessage(): void {
    const updateMessage = "Artikel wurde erfolgreich aktualisiert";
    this._snackBar.open(updateMessage, "OK");
  }

  displayCreateMessage(): void {
    const successMessage = "Artikel wurde erfolgreich hinzugefügt";
    this._snackBar.open(successMessage, "OK");
  }

  displayDeleteMessage(): void {
    const successMessage = "Artikel wurde erfolgreich entfernt";
    this._snackBar.open(successMessage, "OK");
  }

  displayErrorMessage(error: unknown): void {
    const errorMessage = this.getErrorMessage(error);
    this._snackBar.open(errorMessage, "OK");
  }

  private getErrorMessage(error: unknown): string {
    const defaultErrorMessage = 'An error occurred';
    return error instanceof Error ? error.message : defaultErrorMessage;
  }
}
