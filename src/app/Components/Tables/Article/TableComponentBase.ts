import {MatTableDataSource} from "@angular/material/table";
import {ProjectArticle} from "../../../Interface/projectArticle";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {Sort} from "@angular/material/sort";

export abstract class TableComponentBase {
  dataSource!: MatTableDataSource<ProjectArticle>;

  constructor(protected _liveAnnouncer: LiveAnnouncer) {
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  setup_Visibility() {
    return [
      'projekt_artikel_id',
      'projekt_id',
      'artikel_id',
      "artikelname",
      'menge',
      'kategoriename',
      'kategorie_id',
      'ID',
      'preis',
      'beschreibung',
      // 'seriennummer',
    ];
  }

  abstract flattenExtend(flattenedData: any, data: any): any;
}
