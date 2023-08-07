import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ExtraOptions } from '@angular/router';
import { ProjectsTableComponent } from './Components/Tables/projectTable/projects-table/projects-table.component';
import { AssetTableComponent } from './Components/Tables/Article/specialization/1_assetTable/assetTable.component';
import { SimkartenTableComponent } from "./Components/Tables/Article/specialization/2_simkarten-table/simkarten-table.component";
import { NotebookTabelleComponent } from "./Components/Tables/Article/specialization/3_notebook-tabelle/notebook-tabelle.component";
import {HandyTableComponent} from "./Components/Tables/Article/specialization/4_handy-table/handy-table.component";
import {RouterTableComponent} from "./Components/Tables/Article/specialization/5_Router/router-table.component";
import {AcuTableComponent} from "./Components/Tables/Article/specialization/6_Acu/acu-table.component";
import { LoginComponent } from './Components/user/login/login.component';
import {RegisterComponent} from "./Components/user/register/register.component";
import { UserlistingComponent } from "./Components/user/userlisting/userlisting.component";
import { HomeComponent } from './Components/home/home.component';
import {AuthGuard} from "./Components/user/guard/auth.guard";
import { TwoFactorAuth } from "./Components/user/tfa/tfa.component"
import { DeliveryNoteComponent } from "./Components/delivery-note/delivery-note.component"

type RouteConfig = {
  path: string;
  component: any;
  canActivate?: any[];
};

const loginRoute: RouteConfig[] = [
  {path: 'login'       ,  component: LoginComponent                              },
  {path: "register"    ,  component: RegisterComponent                           },
]

const baseRoutes: RouteConfig[] = [
  {path: ''            ,  component: HomeComponent             },
  {path: 'home'        ,  component: HomeComponent             },// toDo:Muad warum 2?
  {path: 'DeliveryNote',  component: DeliveryNoteComponent     },
  {path: 'projects'    ,  component: ProjectsTableComponent    },
  {path: 'Asset'       ,  component: AssetTableComponent       },
  {path: 'Simkarten'   ,  component: SimkartenTableComponent   },
  {path: 'Notebook'    ,  component: NotebookTabelleComponent  },
  {path: 'Handy'       ,  component: HandyTableComponent       },
  {path: 'Router'      ,  component: RouterTableComponent      },
  {path: 'Acu'         ,  component: AcuTableComponent          },
  {path: 'users'       ,  component: UserlistingComponent      },
];

const TFA: RouteConfig[] = [
  {path: 'tfa'         ,  component: TwoFactorAuth                               }
]

function applyGuardToRoutes(routes: RouteConfig[]): RouteConfig[] {
  return routes.map(route => ({
    ...route, canActivate: [AuthGuard]
  }))
}

function enableGuard(): RouteConfig[] {
  return [...loginRoute, ...applyGuardToRoutes(baseRoutes), ...TFA];
}

function disableGuard(): RouteConfig[] {
  return [...loginRoute, ...baseRoutes, ...TFA];
}

//
const routes = disableGuard();

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
