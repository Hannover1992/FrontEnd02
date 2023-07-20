import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ProjectsTableComponent } from './Components/Tables/projectTable/projects-table/projects-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {ButtonInputProjectComponent} from "./Components/Inputs/project_input/button-input-project/button-input-project.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
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
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { NotificationProjectErfolgComponent } from './Components/Inputs/project_input/button-input-project/dialog-create-new-project/project-input-form/notification-project-erfolg/notification-project-erfolg.component';
import { NotificationProjectSucessComponent } from './Components/Inputs/project_input/update-single-project/notification-project-sucess/notification-project-sucess.component';
import { DialogDeleteProjectComponent } from './Components/Tables/projectTable/projects-table/dialog-delete-project/dialog-delete-project.component';
import { FailureComponent } from './Components/notification/failure/failure.component';
import { SuccessComponent } from './Components/notification/success/success.component';
import {RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { A11yModule } from '@angular/cdk/a11y';
import { SideNavComponent } from './Components/side-nav_Menu/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatLegacyMenuModule} from "@angular/material/legacy-menu";
import { ExpensionPanellKategorieComponent } from './Components/side-nav_Menu/expension-panell-kategorie/expension-panell-kategorie.component';
import { ProjectDropDownMenuComponent } from './Components/side-nav_Menu/project-drop-down-menu/project-drop-down-menu.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { AssetTableComponent } from './Components/Tables/Article/specialization/assetTable/assetTable.component';
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
import { DialogDeleteAssetComponent } from './Components/Tables/Article/specialization/assetTable/dialog-delete-asset/dialog-delete-asset.component';
import { ButtonBuchAssetAufAssetProjectComponent } from './Components/Tables/Article/specialization/assetTable/button-buch-asset-auf-asset-project/button-buch-asset-auf-asset-project.component';
import { AssetDetalsComposeComponent } from './Components/Tables/Article/specialization/assetTable/asset-detals-compose/asset-detals-compose.component';
import { ArticleDetailsComposeComponent } from './Components/Tables/Article/base/article-details-compose/article-details-compose.component';
import { ArticleInputComposeComponent } from './Components/Inputs/Article/1Base/article/article-input-compose.component';
import { AssetComposeCreateComponent } from './Components/Inputs/Article/2Asset/asset-compose-create.component';
import { AssetComponent } from './Components/Inputs/Article/2Asset/asset.component';
import { ControlAsset } from './Components/Inputs/Article/2Asset/control/control-asset.component';
import { MengeComponent } from './Components/Inputs/Article/1Base/menge/menge.component';
import { SimkartenTableComponent } from './Components/Tables/Article/specialization/simkarten-table/simkarten-table.component';
import { Simkarten_compose } from './Components/Inputs/Article/3Simkarte/simkarten_compose';
import { CreateSimkarteButtonComponent } from './Components/Tables/Article/specialization/simkarten-table/create-simkarte-button/create-simkarte-button.component';
import { SimkartenDetailsComposeComponent } from './Components/Tables/Article/specialization/simkarten-table/simkarten-details-compose/simkarten-details-compose.component';
import { FilterComponent } from './Components/Tables/Article/filter/filter.component';
import { SimkartenComponent } from './Components/Inputs/Article/3Simkarte/simkarten.component';
import { SimkartenControlComponent } from './Components/Inputs/Article/3Simkarte/control/simkarten-control.component';
import { DialogDeleteSimkartenComponent } from './Components/Tables/Article/specialization/simkarten-table/dialog-delete-simkarten/dialog-delete-simkarten.component';
import { NotebookTabelleComponent } from './Components/Tables/Article/specialization/notebook-tabelle/notebook-tabelle.component';
import { DialogDeleteNotebookComponent } from './Components/Tables/Article/specialization/notebook-tabelle/dialog-delete-notebook/dialog-delete-notebook.component';
import { NotebookDetailComponent } from './Components/Tables/Article/specialization/notebook-tabelle/notebook-detail/notebook-detail.component';


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
  ],
  entryComponents: [ProjectInputFormComponent],
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
    MatButtonToggleModule
  ],
  providers: []
})
export class AppModule { }
