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
import { ProjectToolbarComponent } from './projects/projects-table/project-toolbar/project-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsTableComponent,
    ProjectToolbarComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
