import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ProjectInterface} from "../../../project.interface";
import {ProjectsService} from "../../../../projects/service/projects.service";
import {ProjectService} from "../../../service/project.service";
import {observable, Observable, Observer} from "rxjs";
import {Project} from "../../../project";


@Component({
  selector: 'app-project-input-form',
  templateUrl: './project-input-form.component.html',
  styleUrls: ['./project-input-form.component.css']
})

export class ProjectInputFormComponent {
  // 0	Standort0	Niederlassung0	Auftragsart0	Status0	Logistikkoordinator0	LK_10	LK_20	ZuKo0	Jan 1, 1970	Jan 1, 1970	Jan 1, 1970	Netto_Auftragswert0	I'm Pickle Rick!	0	PM_10	PM_20
  receive_project_details_change($event: any) {
    this.addressForm.controls['project_details'].setValue($event);
  }

  addressForm = this.fb.group({
    project_details: this.fb.group({
      ID: [null, Validators.compose( [Validators.required, Validators.pattern('^[0-9]*$')]) ],
      Anlagenummer: [null, Validators.pattern('^[0-9]*$')],
      Standort:               [null],
      Niederlassung:          null,
      Auftragsart:            null,
      Status:                 null,
      Netto_Auftragswert:     null,
    }),

    datum: this.fb.group({
      Auftragsdatum: null,
      Startdatum: null,
      Endtermin: null,
    }),

    personal: this.fb.group({
      PM_1:                   null,
      PM_2:                   null,
      Logistikkoordinator:    null,
      LK_1:                   null,
      LK_2:                   null,
      ZuKo:                   null,
    }),

    Kommentar:  this.fb.group({
      Kommentar: null,
    })
  });

  constructor(private fb: FormBuilder, private projectService: ProjectService,
              private projectsService: ProjectsService) {}

  async onSubmit(): Promise<void> {

    let project_to_send = this.create_an_project_to_send_from_the_form();
    let something = await this.projectService.create(project_to_send);
    something.subscribe(
      (response) => {
        let project_to_add_at_the_end_of_the_list = creat_an_project_from_project_to_send(project_to_send);
        this.projectsService.projects.push(project_to_add_at_the_end_of_the_list);
        //@ts-ignore
        this.projectsService.setProjects(this.projectsService.projects);
      },
      (error) => {
        console.log(error.error.message);
      }
    )

    //toDo: refactor
    //toDo: catch it in if else, when error

  }

  create_an_project_to_send_from_the_form() {
    //con... from ...details.ID "string to number"
    let ID = Number(this.addressForm.value.project_details?.ID ?? 0);
    let Standort = this.addressForm.value.project_details?.Standort ?? '';
    let Niederlassung = this.addressForm.value.project_details?.Niederlassung ?? '';
    let Auftragsart = this.addressForm.value.project_details?.Auftragsart ?? '';
    let Status = this.addressForm.value.project_details?.Status ?? '';
    let Logistikkoordinator = this.addressForm.value.personal?.Logistikkoordinator ?? '';
    let LK_1 = this.addressForm.value.personal?.LK_1 ?? '';
    let LK_2 = this.addressForm.value.personal?.LK_2 ?? '';
    let ZuKo = this.addressForm.value.personal?.ZuKo ?? '';
    let Auftragsdatum = this.addressForm.value.datum?.Auftragsdatum ?? new Date();
    let Startdatum = this.addressForm.value.datum?.Startdatum ?? new Date();
    let Endtermin = this.addressForm.value.datum?.Endtermin ?? new Date();
    let Netto_Auftragswert = this.addressForm.value.project_details?.Netto_Auftragswert ?? '';
    let Kommentar = this.addressForm.value.Kommentar?.Kommentar ?? '';
    let Anlagenummer = Number(this.addressForm.value.project_details?.Anlagenummer ?? 0);
    let PM_1 = this.addressForm.value.personal?.PM_1 ?? '';
    let PM_2 = this.addressForm.value.personal?.PM_2 ?? '';

    let project_to_send : ProjectInterface = {
      ID: ID,
      Standort: Standort,
      Niederlassung: Niederlassung,
      Auftragsart: Auftragsart,
      Status: Status,
      Logistikkoordinator: Logistikkoordinator,
      LK_1: LK_1,
      LK_2: LK_2,
      ZuKo: ZuKo,
      Auftragsdatum: Auftragsdatum,
      Startdatum: Startdatum,
      Endtermin: Endtermin,
      Netto_Auftragswert: Netto_Auftragswert,
      Kommentar: Kommentar,
      Anlagenummer: Anlagenummer,
      PM_1: PM_1,
      PM_2: PM_2,
    };
    return project_to_send;
  }


}

function creat_an_project_from_project_to_send(project_to_send: ProjectInterface) {
  let project = new Project(0);
  project.ID = project_to_send.ID;
  project.Kommentar = project_to_send.Logistikkoordinator;
  project.Standort = project_to_send.Standort;
  project.Logistikkoordinator = project_to_send.Logistikkoordinator;
  project.LK_1 = project_to_send.LK_1;
  project.LK_2 = project_to_send.LK_2;
  project.ZuKo = project_to_send.ZuKo;
  project.Auftragsdatum = project_to_send.Auftragsdatum;
  project.Startdatum = project_to_send.Startdatum;
  project.Endtermin = project_to_send.Endtermin;
  project.Netto_Auftragswert = project_to_send.Netto_Auftragswert;
  project.Kommentar = project_to_send.Kommentar;
  project.Anlagenummer = project_to_send.Anlagenummer;
  project.PM_1 = project_to_send.PM_1;
  project.PM_2 = project_to_send.PM_2;
  return project;
}
