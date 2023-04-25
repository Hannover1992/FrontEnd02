import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ProjectsTableComponent} from "./Components/Tables/projectTable/projects-table/projects-table.component";
import { AssetTableComponent } from './Components/Tables/assetTable/assetTable.component';
import {
  ElektronikartikelTableComponent
} from "./Components/Tables/elektronikartikelTable/elektronikartikel-table.component";

const routes: Routes = [
  {path: 'projects',  component: ProjectsTableComponent},
  {path: 'Assets',  component: AssetTableComponent},
  {path:'Elektronikartikel', component: ElektronikartikelTableComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
