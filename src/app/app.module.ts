import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ProjectsTableComponent } from './Components/Tables/projectTable/projects-table/projects-table.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import {MatToolbarModule} from "@angular/material/toolbar";
// import {MatIconModule} from "@angular/material/icon";
import {ButtonInputProjectComponent} from "./Components/Inputs/project_input/button-input-project/button-input-project.component";
// import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import { MatInputModule } from '@angular/material/input';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ProjectInputFormComponent } from './Components/Inputs/project_input/button-input-project/dialog-create-new-project/project-input-form/project-input-form.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { ProjectAuftragsDetailComponent } from './Components/Tables/projectTable/projects-table/project-auftrags-detail/project-auftrags-detail.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ProjectDatumDetailComponent } from './Components/Tables/projectTable/projects-table/project-datum-detail/project-datum-detail.component';
import {MatNativeDateModule} from "@angular/material/core";
import { DatumRangePickerComponent } from './Components/Tables/projectTable/projects-table/project-datum-detail/datum-range-picker/datum-range-picker.component';
import { PersonalCardComponent } from './Components/Tables/projectTable/projects-table/personal-card/personal-card.component';
import { ProjectDetailsComponent } from './Components/Inputs/project_input/button-input-project/dialog-create-new-project/project-input-form/project-details/project-details.component';
import { ProjectDatumComponent } from './Components/Inputs/project_input/button-input-project/dialog-create-new-project/project-input-form/project-datum/project-datum.component';
import { PersonalProjectComponent } from './Components/Inputs/project_input/button-input-project/dialog-create-new-project/project-input-form/personal-project/personal-project.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { UpdateSingleProjectComponent } from './Components/Inputs/project_input/update-single-project/update-single-project.component';
// import {MatSnackBarModule} from "@angular/material/snack-bar";
import { NotificationProjectErfolgComponent } from './Components/Inputs/project_input/button-input-project/dialog-create-new-project/project-input-form/notification-project-erfolg/notification-project-erfolg.component';
import { NotificationProjectSucessComponent } from './Components/Inputs/project_input/update-single-project/notification-project-sucess/notification-project-sucess.component';
import { DialogDeleteProjectComponent } from './Components/Tables/projectTable/projects-table/dialog-delete-project/dialog-delete-project.component';
import { FailureComponent } from './Components/notification/failure/failure.component';
import { SuccessComponent } from './Components/notification/success/success.component';
import {RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { A11yModule } from '@angular/cdk/a11y';
import { SideNavComponent } from './Components/side-nav_Menu/side-nav.component';
// import {MatSidenavModule} from "@angular/material/sidenav";
// import {MatLegacyMenuModule} from "@angular/material/legacy-menu";
import { ExpensionPanellKategorieComponent } from './Components/side-nav_Menu/expension-panell-kategorie/expension-panell-kategorie.component';
import { ProjectDropDownMenuComponent } from './Components/side-nav_Menu/project-drop-down-menu/project-drop-down-menu.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { AssetTableComponent } from './Components/Tables/Article/specialization/1_assetTable/assetTable.component';
import { ProjectFilterComponentComponent } from './Components/Tables/projectTable/projects-table/project-filter-component/project-filter-component.component';
import { ProjectAssetsDetailComponent } from './Components/Tables/Article/base/article-details-compose/project-article-detail/project-assets-detail.component';
import { AssetsDatumDetailsComponent } from './Components/Tables/Article/base/article-details-compose/article-datum-details/assets-datum-details.component';
import { NummernDetailsComponent } from './Components/Tables/Article/base/article-details-compose/nummern-details/nummern-details.component';
import { ArticleNumbersInputComponent } from './Components/Inputs/Article/1Base/article/details-Input/article-numbers-input/article-numbers-input.component';
import {MatListModule} from "@angular/material/list";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ArticleInputDateComponent } from './Components/Inputs/Article/1Base/article/details-Input/artickle-input-date/article-input-date.component';
import { ArticleInputDetailComponent } from './Components/Inputs/Article/1Base/article/details-Input/article-input-detail/article-input-detail.component';
import { DialogDeleteAssetComponent } from './Components/Tables/Article/specialization/1_assetTable/dialog-delete-asset/dialog-delete-asset.component';
import { ButtonBuchAssetAufAssetProjectComponent } from './Components/Tables/Article/specialization/1_assetTable/button-buch-asset-auf-asset-project/button-buch-asset-auf-asset-project.component';
import { AssetDetalsComposeComponent } from './Components/Tables/Article/specialization/1_assetTable/asset-detals-compose/asset-detals-compose.component';
import { ArticleDetailsComposeComponent } from './Components/Tables/Article/base/article-details-compose/article-details-compose.component';
import { ArticleInputComposeComponent } from './Components/Inputs/Article/1Base/article/article-input-compose.component';
import { AssetComposeCreateComponent } from './Components/Inputs/Article/2Asset/asset-compose-create.component';
import { AssetComponent } from './Components/Inputs/Article/2Asset/asset.component';
import { ControlAsset } from './Components/Inputs/Article/2Asset/control/control-asset.component';
import { MengeComponent } from './Components/Inputs/Article/1Base/menge/menge.component';
import { SimkartenTableComponent } from './Components/Tables/Article/specialization/2_simkarten-table/simkarten-table.component';
import { Simkarten_compose } from './Components/Inputs/Article/3Simkarte/simkarten_compose';
import { CreateSimkarteButtonComponent } from './Components/Tables/Article/specialization/2_simkarten-table/create-simkarte-button/create-simkarte-button.component';
import { SimkartenDetailsComposeComponent } from './Components/Tables/Article/specialization/2_simkarten-table/simkarten-details-compose/simkarten-details-compose.component';
import { FilterComponent } from './Components/Tables/Article/filter/filter.component';
import { SimkartenComponent } from './Components/Inputs/Article/3Simkarte/simkarten.component';
import { SimkartenControlComponent } from './Components/Inputs/Article/3Simkarte/control/simkarten-control.component';
import { DialogDeleteSimkartenComponent } from './Components/Tables/Article/specialization/2_simkarten-table/dialog-delete-simkarten/dialog-delete-simkarten.component';
import { NotebookTabelleComponent } from './Components/Tables/Article/specialization/3_notebook-tabelle/notebook-tabelle.component';
import { DialogDeleteNotebookComponent } from './Components/Tables/Article/specialization/3_notebook-tabelle/dialog-delete-notebook/dialog-delete-notebook.component';
import { NotebookDetailComponent } from './Components/Tables/Article/specialization/3_notebook-tabelle/notebook-detail/notebook-detail.component';
import { CreateNotebookButtonComponent } from './Components/Tables/Article/specialization/3_notebook-tabelle/create-notebook-button/create-notebook-button.component';
import { NotebookComposeComponent } from './Components/Inputs/Article/4Notebook/notebook-compose.component';
import { NotebookInputComponent } from './Components/Inputs/Article/4Notebook/notebook-input.component';
import { NotebookInputControlComponent } from './Components/Inputs/Article/4Notebook/notebook-input-control/notebook-input-control.component';

import { HandyTableComponent } from './Components/Tables/Article/specialization/4_handy-table/handy-table.component';
import { DialogDeleteHandyComponent } from './Components/Tables/Article/specialization/4_handy-table/dialog-delete-handy/dialog-delete-handy.component';
import { HandyComposeComponent } from './Components/Inputs/Article/5Handy/handy-compose.component';
import { CreateHandyButtonComponent } from './Components/Tables/Article/specialization/4_handy-table/create-handy-button/create-handy-button.component';
import { HandyDetailComponent } from './Components/Tables/Article/specialization/4_handy-table/handy-detail/handy-detail.component';
import { HandyInputComponent } from './Components/Inputs/Article/5Handy/handy-input.component';
import { HandyInputControlComponent } from './Components/Inputs/Article/5Handy/handy-input-control/handy-input-control.component';
import { RouterTableComponent } from './Components/Tables/Article/specialization/5_Router/router-table.component';
import { DialogDeleteRouterComponent } from './Components/Inputs/Article/6Router/dialog-delete-router/dialog-delete-router.component';
import { RouterDetailComponent } from './Components/Tables/Article/specialization/5_Router/router-detail/router-detail.component';
import { CreateRouterButtonComponent } from './Components/Tables/Article/specialization/5_Router/create-router-button/create-router-button.component';
import {RouterComposeComponent} from "./Components/Inputs/Article/6Router/router-compose.component";
import { RouterInputComponent } from './Components/Inputs/Article/6Router/router-input.component';
import { RouterControlComponent } from './Components/Inputs/Article/6Router/router-control/router-control.component';
import { AcuTableComponent } from './Components/Tables/Article/specialization/6_Acu/acu-table.component';
import { AcuComposeComponent } from './Components/Inputs/Article/7Acu/acu-compose.component';
import { AcuDetailComponent } from './Components/Tables/Article/specialization/6_Acu/acu-detail/acu-detail.component';
import { CreateAcuButtonComponent } from './Components/Tables/Article/specialization/6_Acu/create-acu-button/create-acu-button.component';
import {DialogDeleteAcuComponent} from "./Components/Inputs/Article/7Acu/dialog-delete-acu/dialog-delete-acu.component";
import { AcuInputComponent } from './Components/Inputs/Article/7Acu/acu-input.component';
import { AcuControlComponent } from './Components/Inputs/Article/7Acu/acu-control/acu-control.component';
////
import { RegisterComponent } from './Components/user/register/register.component';
import { UpdatepopupComponent } from './Components/user/updatepopup/updatepopup.component';
import { UserlistingComponent } from './Components/user/userlisting/userlisting.component';
import { MaterialModule} from "../material.module";
import { LoginComponent } from './Components/user/login/login.component';
// import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './Components/home/home.component';
import { TwoFactorAuth } from './Components/user/tfa/tfa.component';
// import { QRCodeModule } from 'angularx-qrcode';
import {AuthGuard} from "./Components/user/guard/auth.guard";
import {TwoFactorGuard} from "./Components/user/guard/auth.TwoFactorGuard";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Components/user/service/auth.interceptor';
import {CommonModule} from "@angular/common";
import { DeliveryNoteComponent } from './Components/delivery-note/delivery-note.component';
// import { MatStepperModule } from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ToastrModule} from "ngx-toastr";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyMenuModule} from "@angular/material/legacy-menu";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTooltipModule} from "@angular/material/tooltip";
import { UnterKategorieComponent } from './Components/side-nav_Menu/expension-panell-kategorie/unter-kategorie/unter-kategorie.component';
import { LogOutComponent } from './Components/side-nav_Menu/expension-panell-kategorie/log-out/log-out.component';
import { KategorieNameButtonsComponent } from './Components/side-nav_Menu/expension-panell-kategorie/kategorie-name-buttons/kategorie-name-buttons.component';
import { UnterKategorieButtonsComponent } from './Components/side-nav_Menu/expension-panell-kategorie/unter-kategorie-buttons/unter-kategorie-buttons.component';
import { ProjectButtonComponent } from './Components/side-nav_Menu/expension-panell-kategorie/project-button/project-button.component';
import { DeliverNoteButtonComponent } from './Components/side-nav_Menu/expension-panell-kategorie/deliver-note-button/deliver-note-button.component';
import { DrawerToggleComponent } from './Components/side-nav_Menu/drawer-toggle/drawer-toggle.component';
///

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ProjectsTableComponent,
    ButtonInputProjectComponent,
    ProjectInputFormComponent,
    ProjectAuftragsDetailComponent,
    ProjectDatumDetailComponent,
    DatumRangePickerComponent,
    PersonalCardComponent,
    ProjectDetailsComponent,
    ProjectDatumComponent,
    PersonalProjectComponent,
    UpdateSingleProjectComponent,
    NotificationProjectErfolgComponent,
    NotificationProjectSucessComponent,
    DialogDeleteProjectComponent,
    FailureComponent,
    SuccessComponent,
    SideNavComponent,
    ExpensionPanellKategorieComponent,
    ProjectDropDownMenuComponent,
    AssetTableComponent,
    ProjectFilterComponentComponent,
    ProjectAssetsDetailComponent,
    AssetsDatumDetailsComponent,
    NummernDetailsComponent,
    ArticleNumbersInputComponent,
    ArticleInputDateComponent,
    ArticleInputDetailComponent,
    DialogDeleteAssetComponent,
    ButtonBuchAssetAufAssetProjectComponent,
    AssetDetalsComposeComponent,
    ArticleDetailsComposeComponent,
    ArticleInputComposeComponent,
    AssetComposeCreateComponent,
    AssetComponent,
    ControlAsset,
    MengeComponent,
    SimkartenTableComponent,
    Simkarten_compose,
    CreateSimkarteButtonComponent,
    SimkartenDetailsComposeComponent,
    FilterComponent,
    SimkartenComponent,
    SimkartenControlComponent,
    DialogDeleteSimkartenComponent,
    NotebookTabelleComponent,
    DialogDeleteNotebookComponent,
    NotebookDetailComponent,
    CreateNotebookButtonComponent,
    NotebookComposeComponent,
    NotebookInputComponent,
    NotebookInputControlComponent,
    HandyTableComponent,
    DialogDeleteHandyComponent,
    HandyComposeComponent,
    CreateHandyButtonComponent,
    HandyDetailComponent,
    HandyInputComponent,
    HandyInputControlComponent,
    RouterTableComponent,
    DialogDeleteRouterComponent,
    RouterDetailComponent,
    CreateRouterButtonComponent,
    RouterComposeComponent,
    RouterInputComponent,
    RouterControlComponent,
    AcuTableComponent,
    DialogDeleteAcuComponent,
    AcuComposeComponent,
    AcuDetailComponent,
    CreateAcuButtonComponent,
    AcuInputComponent,
    AcuControlComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UpdatepopupComponent,
    UserlistingComponent,
    TwoFactorAuth,
    DeliveryNoteComponent,
    UnterKategorieComponent,
    LogOutComponent,
    KategorieNameButtonsComponent,
    UnterKategorieButtonsComponent,
    ProjectButtonComponent,
    DeliverNoteButtonComponent,
    DrawerToggleComponent,
  ],
  //entryComponents: [ProjectInputFormComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ToastrModule.forRoot(),
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
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        MatSnackBarModule,
        RouterModule,
        AppRoutingModule,
        A11yModule,
        MatSidenavModule,
        MatLegacyMenuModule,
        MatAutocompleteModule,
        MatListModule,
        MatLegacyChipsModule,
        MatButtonToggleModule,
        // QRCodeModule,
        // MatStepperModule,
        MatCheckboxModule,
        MatStepperModule,
        MatTooltipModule
    ],
  providers: [
    AuthGuard,
    TwoFactorGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
})
export class AppModule { }
