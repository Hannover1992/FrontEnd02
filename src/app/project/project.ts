import {ProjectInterface} from "./project.interface";

  export class Project implements ProjectInterface {
    ID:                     number;
    Standort:               string;
    Niederlassung:          string;
    Auftragsart:            string;
    Status:                 string;
    Logistikkoordinator:    string;
    LK_1:                   string;
    LK_2:                   string;
    ZuKo:                   string;
    Auftragsdatum:          Date;
    Startdatum:             Date;
  Endtermin:              Date;
  Netto_Auftragswert:     string;
  Kommentar:              string;
  Anlagenummer:           number;
  PM_1:                   string;
  PM_2:                   string;
  detailRow: any;
  constructor(
    ID:                     number = 0,
    Standort:               string = '',
    Niederlassung:          string = '',
    Auftragsart:            string = '',
    Status:                 string = '',
    Logistikkoordinator:    string = '',
    LK_1:                   string = '',
    LK_2:                   string = '',
    ZuKo:                   string = '',
    Auftragsdatum:          Date = new Date(),
    Startdatum:             Date = new Date(),
    Endtermin:              Date = new Date(),
    Netto_Auftragswert:     string = '',
    Kommentar:              string = '',
    Anlagenummer:           number = 0,
    PM_1:                   string = '',
    PM_2:                   string = '',
  ) {

    this.ID                   = ID;
    this.Standort             = Standort;
    this.Niederlassung        = Niederlassung;
    this.Auftragsart          = Auftragsart;
    this.Status               = Status;
    this.Logistikkoordinator  = Logistikkoordinator;
    this.LK_1                 = LK_1;
    this.LK_2                 = LK_2;
    this.ZuKo                 =  ZuKo;
    this.Auftragsdatum        = Auftragsdatum;
    this.Startdatum           = Startdatum;
    this.Endtermin            = Endtermin;
    this.Netto_Auftragswert   = Netto_Auftragswert;
    this.Kommentar            = Kommentar;
    this.Anlagenummer         = Anlagenummer;
    this.PM_1                 = PM_1;
    this.PM_2                 = PM_2;
  }
}
