import { TestBed } from '@angular/core/testing';

import {HttpClientModule} from "@angular/common/http";
import {Project} from "../../project/project";
import {ProjectsTableDataSource} from "./projects-table-datasource";
import {ProjectInterface} from "../../project/project.interface";
import {DataSource} from "@angular/cdk/collections";

describe('ProjectsService', () => {
  let projectsTableDataSource: ProjectsTableDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    });
    projectsTableDataSource = new ProjectsTableDataSource();
  });

  it('should be created', () => {
    expect(projectsTableDataSource).toBeTruthy();
  });

  // const EXAMPLE_DATA: ProjectInterface[] = [
  //   {ID: 1, Standort: 'Legnica', Niederlassung: 'Berling', Auftragsart: 'Operative', Status: 'Aktive', Logistikkoordinator: 'Frank', LK_1: 'Frank', LK_2: 'Frank', ZuKo: 'Frank', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: 'lorem What is my purpose. You pass butter. Oh My God. Yeah, Welcome to the club pal.', Anlagenummer: 1, PM_1: 'Mike', PM_2: 'Elissa'},
  //   {ID: 2, Standort: 'Wrocal', Niederlassung: 'Hamburg', Auftragsart: 'Nicht Operative', Status: 'Inaktive', Logistikkoordinator: 'Hubert Frank', LK_1: 'Zelon Frank', LK_2: 'Frank Zelon', ZuKo: 'Frank Zelon', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: 'Existence is pain to a meeseeks Jerry, and we will do anything to alleviate that pain.', Anlagenummer: 1, PM_1: 'Mike', PM_2: 'Elissa'},
  //   {ID: 3, Standort: 'Berlin', Niederlassung: 'Berlin', Auftragsart: 'Operative', Status: 'Aktive', Logistikkoordinator: 'Frank', LK_1: 'Frank', LK_2: 'Frank', ZuKo: 'Frank', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: "Well then get your shit together. Get it all together and put it in a backpack, all your shit, so it's together. ...and if you gotta take it somewhere, take it somewhere ya know? Take it to the shit store and sell it, or put it in a shit museum. I don't care what you do, you just gotta get it together... Get your shit together.", Anlagenummer: 389283, PM_1: 'Mike', PM_2: 'Elissa'},
  //   {ID: 3, Standort: 'Berlin', Niederlassung: 'Berlin', Auftragsart: 'Operative', Status: 'Aktive', Logistikkoordinator: 'Frank', LK_1: 'Frank', LK_2: 'Frank', ZuKo: 'Frank', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: "Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet.", Anlagenummer: 389283, PM_1: 'Mike', PM_2: 'Elissa'},
  // ];
  // export class ProjectsTableDataSource extends DataSource<ProjectInterface> {
  //   data: ProjectInterface[] = EXAMPLE_DATA;

  it('the first entry shoudl have ID: 1', () => {
    let id = projectsTableDataSource.data[0].ID;
    expect(id).toBe(1);
  });
});
