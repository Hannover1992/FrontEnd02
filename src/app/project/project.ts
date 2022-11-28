import {ProjectInterface} from "./project.interface";

export class Project implements ProjectInterface {
  Anlagenummer: number;
  Auftragsart: string;
  Auftragsdatum: Date;
  Endtermin: Date;
  ID: number;
  Kommentar: string;
  LK_1: string;
  LK_2: string;
  Logistikkoordinator: string;
  Netto_Auftragswert: string;
  Niederlassung: string;
  PM_1: string;
  PM_2: string;
  Standort: string;
  Startdatum: Date;
  Status: string;
  ZuKo: string;

  constructor() {
    this.Anlagenummer = 0;
    this.Auftragsart = '';
    this.Auftragsdatum = new Date();
    this.Endtermin = new Date();
    this.ID = 0;
    this.Kommentar = '';
    this.LK_1 = '';
    this.LK_2 = '';
    this.Logistikkoordinator = '';
    this.Netto_Auftragswert = '';
    this.Niederlassung = '';
    this.PM_1 = '';
    this.PM_2 = '';
    this.Standort = '';
    this.Startdatum = new Date();
    this.Status = '';
    this.ZuKo = '';
  }
}

