import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ProjectsTableComponent} from "./Components/Tables/projectTable/projects-table/projects-table.component";
import { AssetTableComponent } from './Components/Tables/asset-table/asset-table.component';

const routes: Routes = [
  {path: 'projects',  component: ProjectsTableComponent},
  {path: 'Assets',  component: AssetTableComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
