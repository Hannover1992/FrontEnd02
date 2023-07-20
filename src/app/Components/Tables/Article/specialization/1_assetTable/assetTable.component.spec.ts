import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AssetTableComponent } from './assetTable.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssetTableService } from "../../../../../Services/Article/specialization/asset-table.service";
import { ActivatedRoute } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { of } from 'rxjs';
import {Article} from "../../../../../Interface/article";
import {ProjectArticle} from "../../../../../Interface/projectArticle";

describe('AssetTableComponent', () => {
  let component: AssetTableComponent;
  let fixture: ComponentFixture<AssetTableComponent>;
  let service: AssetTableService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule,
        NoopAnimationsModule // <-- Add this line
      ],
      declarations: [AssetTableComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({})
          }
        },
        AssetTableService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssetTableComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AssetTableService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();

    const mockResponse = {}; // Your mock response for POST request
    const mockGetResponse: any[] = []; // Explicitly set type to any[]

    // Handle the GET request to 'http://localhost:8080/projects'
    httpTestingController.expectOne('http://localhost:8080/projects').flush(mockGetResponse);

    // Handle the GET request to 'http://localhost:8080/projekt_assets/802007/Verkehrstechnik'
    const getRequests = httpTestingController.match('http://localhost:8080/projekt_assets/802007/Verkehrstechnik');
    for (const req of getRequests) {
      req.flush(mockGetResponse);
    }

    let article = initialize_article();
    let projectArticle = initialize_project_article(article);

    service.create(projectArticle);
// Handle the POST request
    httpTestingController.expectOne('http://localhost:8080/projektArtikelAsset').flush(mockResponse);

    tick(1000);

    // Handling the unexpected request
    const unexpectedRequest = httpTestingController.expectOne('http://localhost:8080/projekt_assets/802007/Verkehrstechnik');
    unexpectedRequest.flush(mockGetResponse);

    // Ensure that there are no outstanding requests
    httpTestingController.verify();
  }));
});


function initialize_article() {
  let article: Article = {
    artikel_id: 0,
    "artikelname": "",
    "firma": "",
    "model": "",
    "unterkategorie_id": 1,
    "preis": 0,
    "beschreibung": "",
    "bild_url": "",
    "zustand": "",
    "einkaufs_datum": "",
    "belegt_von": "",
    "belegt_bis": "",
    "edit_date": "",
    "anlagenummer": "",
    "besitzer_id": null,
    "seriennummer": "",
    "assets": {
      "ID": 0,
      "Inventarnummer": 0
    }
  }
  return article;
}


function initialize_project_article(article: Article){
  let projectArticle: ProjectArticle = {
    projekt_artikel_id: 0,
    "artikel_id": 0,
    "projekt_id": 802007,
    "menge": 10,
    "artikel": article
  };
  return projectArticle;
}
