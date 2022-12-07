import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {ProjectInterface} from "../../project/project.interface";

// TODO: Replace this with your own data model type
// export interface ProjectInterface {
//   name: string;
//   id: number;
//   //just to pusch2
// }

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ProjectInterface[] = [
  {ID: 1, Standort: 'Legnica', Niederlassung: 'Berling', Auftragsart: 'Operative', Status: 'Aktive', Logistikkoordinator: 'Frank', LK_1: 'Frank', LK_2: 'Frank', ZuKo: 'Frank', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: 'lorem What is my purpose. You pass butter. Oh My God. Yeah, Welcome to the club pal.', Anlagenummer: 1, PM_1: 'Mike', PM_2: 'Elissa'},
  {ID: 2, Standort: 'Wrocal', Niederlassung: 'Hamburg', Auftragsart: 'Nicht Operative', Status: 'Inaktive', Logistikkoordinator: 'Hubert Frank', LK_1: 'Zelon Frank', LK_2: 'Frank Zelon', ZuKo: 'Frank Zelon', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: 'Existence is pain to a meeseeks Jerry, and we will do anything to alleviate that pain.', Anlagenummer: 1, PM_1: 'Mike', PM_2: 'Elissa'},
  {ID: 3, Standort: 'Berlin', Niederlassung: 'Berlin', Auftragsart: 'Operative', Status: 'Aktive', Logistikkoordinator: 'Frank', LK_1: 'Frank', LK_2: 'Frank', ZuKo: 'Frank', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: "Well then get your shit together. Get it all together and put it in a backpack, all your shit, so it's together. ...and if you gotta take it somewhere, take it somewhere ya know? Take it to the shit store and sell it, or put it in a shit museum. I don't care what you do, you just gotta get it together... Get your shit together.", Anlagenummer: 389283, PM_1: 'Mike', PM_2: 'Elissa'},
  {ID: 3, Standort: 'Berlin', Niederlassung: 'Berlin', Auftragsart: 'Operative', Status: 'Aktive', Logistikkoordinator: 'Frank', LK_1: 'Frank', LK_2: 'Frank', ZuKo: 'Frank', Auftragsdatum: new Date(), Startdatum: new Date(), Endtermin: new Date(), Netto_Auftragswert: '1000 mio', Kommentar: "Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet.", Anlagenummer: 389283, PM_1: 'Mike', PM_2: 'Elissa'},
];

/**
 * Data source for the ProjectsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProjectsTableDataSource extends DataSource<ProjectInterface> {
  data: ProjectInterface[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ProjectInterface[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ProjectInterface[]): ProjectInterface[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ProjectInterface[]): ProjectInterface[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        // case 'name': return compare(a.name, b.name, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
          case 'ID': return compare(+a.ID, +b.ID, isAsc);
          case 'Standort': return compare(+a.Standort, +b.Standort, isAsc);
          case 'Niederlassung': return compare(+a.Niederlassung, +b.Niederlassung, isAsc);
          case 'Auftragsart': return compare(+a.Auftragsart, +b.Auftragsart, isAsc);
          case 'Status': return compare(+a.Status, +b.Status, isAsc);
          case 'Logistikkoordinator': return compare(+a.Logistikkoordinator, +b.Logistikkoordinator, isAsc);
          case 'LK_1': return compare(+a.LK_1, +b.LK_1, isAsc);
          case 'LK_2': return compare(+a.LK_2, +b.LK_2, isAsc);
          case 'ZuKo': return compare(+a.ZuKo, +b.ZuKo, isAsc);
          case 'Auftragsdatum': return compare(+a.Auftragsdatum, +b.Auftragsdatum, isAsc);
          case 'Startdatum': return compare(+a.Startdatum, +b.Startdatum, isAsc);
          case 'Endtermin': return compare(+a.Endtermin, +b.Endtermin, isAsc);
          case 'Netto_Auftragswert': return compare(+a.Netto_Auftragswert, +b.Netto_Auftragswert, isAsc);
          case 'Kommentar': return compare(+a.Kommentar, +b.Kommentar, isAsc);
          case 'Anlagenummer': return compare(+a.Anlagenummer, +b.Anlagenummer, isAsc);
          case 'PM_1': return compare(+a.PM_1, +b.PM_1, isAsc);
          case 'PM_2': return compare(+a.PM_2, +b.PM_2, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
