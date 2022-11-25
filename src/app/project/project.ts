export interface Project {
  ID:                     number;
  Standort:               String;
  Niederlassung:          String;
  Auftragsart:            String;
  Status:                 String;
  Logistikkoordinator:    String;
  LK_1:                   String;
  LK_2:                   String;
  ZuKo:                   String;
  Auftragsdatum:          Date;
  Startdatum:             Date;
  Endtermin:              Date;
  Netto_Auftragswert:     String;
  Kommentar:              String;
  Anlagenummer:           number;
  PM_1:                   String;
  PM_2:                   String;
}
