import { Injectable } from '@angular/core';
import {Notebook} from "../../../../../Interface/article/Notebook";
import {Subscription} from "rxjs";
import {FormDataService} from "../../form-data.service";

@Injectable({
  providedIn: 'root'
})
export class NotebookDataService {
  public notebook!: Notebook;
  private notebookSubscribtion!: Subscription;

  constructor(
    private notebookFormData:   FormDataService
  ) {
    this.subscribeNotebookForm();
  }

  private subscribeNotebookForm() {
    this.notebookSubscribtion = this.notebookFormData.getFormData().subscribe(data => {
      this.notebook = this.formatFormToNotebook(data)
    });
  }

  private formatFormToNotebook(data: any): Notebook {
    let notebook: Notebook = {
      notebook_id: data?.notebook_id,
      admin_konto_name: data?.admin_konto_name,
      admin_konto_password: data?.admin_konto_password,
      user_konto_name: data?.user_konto_name,
      user_konto_password: data?.user_konto_password
    }
    return notebook;
  }
}
