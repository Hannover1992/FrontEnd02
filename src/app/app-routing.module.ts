import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ProjectsTableComponent} from "./Components/projectTable/projects-table/projects-table.component";

const routes: Routes = [
  {path: 'projects',  component: ProjectsTableComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
