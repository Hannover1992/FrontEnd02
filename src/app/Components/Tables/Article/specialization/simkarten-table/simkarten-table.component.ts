import {Component, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SimkartenTableService} from "../../../../../Services/Article/specialization/simkarten-table.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ProjectArticle} from "../../../../../Interface/projectArticle";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-simkarten-table',
  templateUrl: './simkarten-table.component.html',
  styleUrls: ['./simkarten-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SimkartenTableComponent {

  dataSource: MatTableDataSource<ProjectArticle>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ContentChild('content') content!: TemplateRef<any>;

  expandedElement:  ProjectArticle | null;
  displayedColumns = this.setup_Visibility();



  private dialog: MatDialog;

  constructor(
    public simkartentableService: SimkartenTableService,
    private updateElementService: SimkartenTableService,
    private _liveAnnouncer: LiveAnnouncer,
    dialog: MatDialog,
  ){

    this.dialog = dialog;
    this.dataSource = new MatTableDataSource(simkartentableService.data.getValue());
    this.expandedElement = null;
    this.read();
  }

  read() {
    this.simkartentableService.data.subscribe((data) => {
      let data_flatten = data.map(this.flattenData);
      this.dataSource = new MatTableDataSource(data_flatten);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  //toDo: perhaps build as a add funciton that get implement and say whcih flatt to add
  flattenData(data: any) {
    const flattenedData = { ...data, ...data.artikel, ...data.artikel.simkarten, ...data.artikel.unterkategorie, ...data.artikel.unterkategorie.kategorien };
    delete flattenedData.artikel;
    return flattenedData;
  }


  setup_Visibility() {
    return  [
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

}
