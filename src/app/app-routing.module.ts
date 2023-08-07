import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ProjectsTableComponent } from './Components/Tables/projectTable/projects-table/projects-table.component';
import { AssetTableComponent } from './Components/Tables/Article/specialization/1_assetTable/assetTable.component';
import { SimkartenTableComponent } from "./Components/Tables/Article/specialization/2_simkarten-table/simkarten-table.component";
import {
  NotebookTabelleComponent
} from "./Components/Tables/Article/specialization/3_notebook-tabelle/notebook-tabelle.component";
import {HandyTableComponent} from "./Components/Tables/Article/specialization/4_handy-table/handy-table.component";
import {RouterTableComponent} from "./Components/Tables/Article/specialization/5_Router/router-table.component";
import {AcuTableComponent} from "./Components/Tables/Article/specialization/6_Acu/acu-table.component";
//

import { LoginComponent } from './Components/user/login/login.component';
import {RegisterComponent} from "./Components/user/register/register.component";
import { UserlistingComponent } from "./Components/user/userlisting/userlisting.component";
import { HomeComponent } from './Components/home/home.component';
import {AuthGuard} from "./Components/user/guard/auth.guard";
import { TwoFactorAuth } from "./Components/user/tfa/tfa.component"
import {TwoFactorGuard} from "./Components/user/guard/auth.TwoFactorGuard";
import { DeliveryNoteComponent } from "./Components/delivery-note/delivery-note.component"

function enableGuard() {
  const routes: Routes = [
    {path: 'DeliveryNote', component: DeliveryNoteComponent,canActivate: [AuthGuard] },
    {path: 'projects', component: ProjectsTableComponent, canActivate: [AuthGuard]},
    {path: 'Asset', component: AssetTableComponent,canActivate: [AuthGuard]},
    {path: 'Simkarten', component: SimkartenTableComponent, canActivate: [AuthGuard]},
    {path: 'Notebook', component: NotebookTabelleComponent},
    {path: 'Handy', component: HandyTableComponent, canActivate: [AuthGuard]},
    {path: 'Router', component: RouterTableComponent, canActivate: [AuthGuard]},
    {path: 'Acu', component: AcuTableComponent, canActivate: [AuthGuard]},
    {path: '', component: HomeComponent,canActivate: [AuthGuard] },
    {path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: 'users', component: UserlistingComponent, canActivate: [AuthGuard]},
    {path: 'tfa', component: TwoFactorAuth, canActivate: [TwoFactorGuard]},
  ];
  return routes;
}

//
const routes = enableGuard();

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
