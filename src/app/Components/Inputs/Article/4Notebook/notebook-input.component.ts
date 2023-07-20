import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../form-data.service";
import {SimkartenUpdateElementService} from "../3Simkarte/service/SimkartenUpdateElementService";
import {NotebookUpdateElementService} from "./service/notebook-update-element.service";
import {Simkarten} from "../../../../Interface/article/Simkarte";
import {Notebook} from "../../../../Interface/article/Notebook";

@Component({
  selector: 'app-notebook-input',
  templateUrl: './notebook-input.component.html',
  styleUrls: ['../../../../shared_css/input.css']
})
export class NotebookInputComponent implements OnInit{
  hideAdminPassword = true;
  hideUserPassword = true;

  notebookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formDataService: FormDataService,
    private updateElementService: NotebookUpdateElementService
  ){}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    let notebook: Notebook  | undefined = undefined;

    if(this.updateElementService.isActivated()){
      let article = this.updateElementService.getArticle();
      notebook = article ? article.notebook : undefined;
    }

    this.notebookForm = this.initForm(notebook);
    this.formDataService.setForm(this.notebookForm)
  }

  initForm(notebook?: Notebook): FormGroup {
    return this.fb.group({
      notebook_id: notebook ? notebook.notebook_id : undefined,
      admin_konto_name: notebook ? notebook.admin_konto_name : '',
      admin_konto_password: notebook ? notebook.admin_konto_password : '',
      user_konto_name: notebook ? notebook.user_konto_name : '',
      user_konto_password: notebook ? notebook.user_konto_password : '',
    });
  }


}
