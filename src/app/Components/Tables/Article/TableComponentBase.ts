import {MatTableDataSource} from "@angular/material/table";
import {ProjectArticle} from "../../../Interface/projectArticle";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {Component, ViewChild} from "@angular/core";
import {MatPaginator} from "@angular/material/paginator";
import {TableServiceCRUD} from "../../../Services/Article/TableServiceCRUD";
import {KategorienWithSubkategorienService} from "../../../Services/kategorien-with-subkategorien.service";


@Component({
  template: ''
})

export abstract class TableComponentBase {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<ProjectArticle>;

  expandedElement:  ProjectArticle | null;

  dialog: MatDialog;
  displayedColumns = this.setup_Visibility();



  constructor(
    protected _liveAnnouncer: LiveAnnouncer,
    dialog: MatDialog,
    protected  TableService: TableServiceCRUD,
    protected kategorienWithSubkategorienService : KategorienWithSubkategorienService
  ) {


    this.flattenData = this.flattenData.bind(this);
    this.expandedElement = null;
    this.dialog = dialog;

    this.dataSource = new MatTableDataSource(TableService.data.getValue());

    this.read();

  }



  applyFilter(filterValue: string) {
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
      // 'projekt_artikel_id',
      // 'projekt_id',
      // 'artikel_id',
      "artikelname",
      'kategoriename',
      // 'kategorie_id',
      // 'ID',
      // 'preis',
      // 'beschreibung',
      // 'seriennummer',
      'menge',
    ];
  }

  flattenData(data: any) {
    let flattenedData = { ...data, ...data.artikel, ...data.artikel.unterkategorie, ...data.artikel.unterkategorie.kategorien };
    delete flattenedData.artikel;
    delete flattenedData.unterkategorie;
    flattenedData = this.flattenExtend(flattenedData);
    return flattenedData;
  }



  read() : void {

    this.TableService.data.subscribe((data : any) => {
      let data_flatten = data.map(this.flattenData);
      this.dataSource = new MatTableDataSource(data_flatten);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

  protected  abstract open_the_dialog_for_deleting_artikel(element: ProjectArticle): void;

  protected  abstract open_the_dialog_for_updating_artikel(element: any): void ;

  protected  abstract flattenExtend(flattenedData: any): any;
}
