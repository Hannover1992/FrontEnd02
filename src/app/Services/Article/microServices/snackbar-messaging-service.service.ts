import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})

export class SnackbarMessagingServiceService {
  constructor(private _snackBar: MatSnackBar) {}

  diplayUpdateMessage(): void {
    const updateMessage = "Artikel wurde erfolgreich aktualisiert";
    this.open_snuckbar(updateMessage);
  }

  displayCreateMessage(): void {
    const successMessage = "Artikel wurde erfolgreich hinzugefügt";
    this.open_snuckbar(successMessage);
  }

  displayDeleteMessage(): void {
    const successMessage = "Artikel wurde erfolgreich entfernt";
    this.open_snuckbar(successMessage);
  }

  displayErrorMessage(error: unknown): void {
    const errorMessage = this.getErrorMessage(error);
    this.open_snuckbar(errorMessage);
  }

  private open_snuckbar(successMessage: string) {
    this._snackBar.open(successMessage, "OK", {
      duration: 2000,
    });
  }

  private getErrorMessage(error: unknown): string {
    const defaultErrorMessage = 'An error occurred';
    return error instanceof Error ? error.message : defaultErrorMessage;
  }
}
