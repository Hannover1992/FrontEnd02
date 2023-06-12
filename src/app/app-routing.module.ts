import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProjectsTableComponent } from './Components/Tables/projectTable/projects-table/projects-table.component';
import { AssetTableComponent } from './Components/Tables/assetTable/assetTable.component';
import { ElektronikartikelTableComponent } from './Components/Tables/elektronikartikelTable/elektronikartikel-table.component';
import {AssetSpecComponent} from "./Components/Tables/assetTable/specilizedTable/asset-spec/details/asset-spec.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsTableComponent },
  { path: 'Asset', component: AssetSpecComponent },
  { path: 'Elektronikartikel', component: ElektronikartikelTableComponent },
];

// Erstellen Sie die routerOptions-Konstante
const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Fügen Sie routerOptions als zweites Argument in der forRoot()-Methode hinzu
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
