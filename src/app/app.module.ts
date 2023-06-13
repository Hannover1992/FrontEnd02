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
import {ButtonInputProjectComponent} from "./Components/Tables/project/button-input-project/button-input-project.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ProjectInputFormComponent } from './Components/Tables/project/button-input-project/dialog-create-new-project/project-input-form/project-input-form.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { ProjectAuftragsDetailComponent } from './Components/Tables/projectTable/projects-table/project-auftrags-detail/project-auftrags-detail.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ProjectDatumDetailComponent } from './Components/Tables/projectTable/projects-table/project-datum-detail/project-datum-detail.component';
import {MatNativeDateModule} from "@angular/material/core";
import { DatumRangePickerComponent } from './Components/Tables/projectTable/projects-table/project-datum-detail/datum-range-picker/datum-range-picker.component';
import { PersonalCardComponent } from './Components/Tables/projectTable/projects-table/personal-card/personal-card.component';
import { ProjectDetailsComponent } from './Components/Tables/project/button-input-project/dialog-create-new-project/project-input-form/project-details/project-details.component';
import { ProjectDatumComponent } from './Components/Tables/project/button-input-project/dialog-create-new-project/project-input-form/project-datum/project-datum.component';
import { PersonalProjectComponent } from './Components/Tables/project/button-input-project/dialog-create-new-project/project-input-form/personal-project/personal-project.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { UpdateSingleProjectComponent } from './Components/Tables/project/update-single-project/update-single-project.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { NotificationProjectErfolgComponent } from './Components/Tables/project/button-input-project/dialog-create-new-project/project-input-form/notification-project-erfolg/notification-project-erfolg.component';
import { NotificationProjectSucessComponent } from './Components/Tables/project/update-single-project/notification-project-sucess/notification-project-sucess.component';
import { DialogDeleteProjectComponent } from './Components/Tables/projectTable/projects-table/dialog-delete-project/dialog-delete-project.component';
import { FailureComponent } from './Components/notification/failure/failure.component';
import { SuccessComponent } from './Components/notification/success/success.component';
import {RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { A11yModule } from '@angular/cdk/a11y';
import { SideNavComponent } from './Components/side-nav_Menu/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { KategorieSubkategorieComponent } from './Components/side-nav_Menu/kategorie-subkategorie/kategorie-subkategorie.component';
import {MatLegacyMenuModule} from "@angular/material/legacy-menu";
import { ExpensionPanellKategorieComponent } from './Components/side-nav_Menu/expension-panell-kategorie/expension-panell-kategorie.component';
import { ProjectDropDownMenuComponent } from './Components/side-nav_Menu/project-drop-down-menu/project-drop-down-menu.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { AssetTableComponent } from './Components/Tables/assetTable/assetTable.component';
import { ElektronikartikelTableComponent } from './Components/Tables/elektronikartikelTable/elektronikartikel-table.component';
import { ProjectFilterComponentComponent } from './Components/Tables/projectTable/projects-table/project-filter-component/project-filter-component.component';
import { ProjectAssetsDetailComponent } from './Components/Tables/assetTable/details/project-assets-detail/project-assets-detail.component';
import { AssetsDatumDetailsComponent } from './Components/Tables/assetTable/details/assets-datum-details/assets-datum-details.component';
import { NummernDetailsComponent } from './Components/Tables/assetTable/details/nummern-details/nummern-details.component';
import { ButtonBuchAssetAufProjektComponent } from './Components/Tables/assetTable/button-buch-asset-auf-projekt/button-buch-asset-auf-projekt.component';
import { InputArtikleForm } from './Components/Tables/assetTable/button-buch-asset-auf-projekt/input-form-asset/input-artikle-form.component';
import { AssetNumbersInputComponent } from './Components/Tables/assetTable/button-buch-asset-auf-projekt/input-form-asset/details/asset-numbers-input/asset-numbers-input.component';
import {MatListModule} from "@angular/material/list";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { AssetInputDateComponent } from './Components/Tables/assetTable/button-buch-asset-auf-projekt/input-form-asset/details/asset-input-date/asset-input-date.component';
import { AssetInputDetailComponent } from './Components/Tables/assetTable/button-buch-asset-auf-projekt/input-form-asset/details/asset-input-detail/asset-input-detail.component';
import { DialogDeleteAssetComponent } from './Components/Tables/assetTable/dialog-delete-asset/dialog-delete-asset.component';
import { AssetSpecComponent } from './Components/Tables/assetTable/specilizedTable/asset-spec/details/asset-spec.component';
import { AssetInputFormComponent } from './Components/Tables/assetTable/button-buch-asset-auf-projekt/input-form-asset/specificImplementation/asset-input-form/asset-input-form.component';


@NgModule({
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
    KategorieSubkategorieComponent,
    ExpensionPanellKategorieComponent,
    ProjectDropDownMenuComponent,
    AssetTableComponent,
    ElektronikartikelTableComponent,
    ProjectFilterComponentComponent,
    ProjectAssetsDetailComponent,
    AssetsDatumDetailsComponent,
    NummernDetailsComponent,
    ButtonBuchAssetAufProjektComponent,
    InputArtikleForm,
    AssetNumbersInputComponent,
    AssetInputDateComponent,
    AssetInputDetailComponent,
    DialogDeleteAssetComponent,
    AssetSpecComponent,
    AssetInputFormComponent,
  ],
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectInputFormComponent]
})
export class AppModule { }
