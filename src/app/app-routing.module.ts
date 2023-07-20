import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProjectsTableComponent } from './Components/Tables/projectTable/projects-table/projects-table.component';
import { AssetTableComponent } from './Components/Tables/Article/specialization/1_assetTable/assetTable.component';
import { SimkartenTableComponent } from "./Components/Tables/Article/specialization/2_simkarten-table/simkarten-table.component";
import {
  NotebookTabelleComponent
} from "./Components/Tables/Article/specialization/3_notebook-tabelle/notebook-tabelle.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsTableComponent },
  { path: 'Asset', component: AssetTableComponent },
  { path: 'Simkarten', component: SimkartenTableComponent},
  { path: 'Notebook', component: NotebookTabelleComponent}

];

// Erstellen Sie die routerOptions-Konstante
const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
