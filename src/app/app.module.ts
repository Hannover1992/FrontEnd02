import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ProjectsTableComponent } from './projects/projects-table/projects-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {ButtonInputProjectComponent} from "./project/button-input-project/button-input-project.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { DialogCreateNewProjectComponent } from './project/button-input-project/dialog-create-new-project/dialog-create-new-project.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ProjectInputFormComponent } from './project/button-input-project/dialog-create-new-project/project-input-form/project-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsTableComponent,
    ButtonInputProjectComponent,
    DialogCreateNewProjectComponent,
    ProjectInputFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
