import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { AssetTableComponent } from './assetTable.component';
import { HttpClientModule } from "@angular/common/http";
import { AssetTableService } from "../../Services/asset-table.service";
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {Article} from "./Interface/article";
import {Asset} from "./Interface/asset";
import {Subcategory} from "./Interface/subcategory"; // <---- Add this line

describe('AssetTableComponent', () => {
  let component: AssetTableComponent;
  let fixture: ComponentFixture<AssetTableComponent>;
  let service: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule // <---- Add this line
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
    fixture.detectChanges();
  });

  it('ich einstelle die testumgebung fur die ', () => {
    // Test logic here
  });

  it('should create', fakeAsync(() => { // Start of the fakeAsync function
    expect(component).toBeTruthy();

    let projectArticle = {
      "artikel_id": 0,
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
    };

    service.create_new_asset(projectArticle).subscribe((data: any) => {
      console.log(data);
    });
  })); // End of the fakeAsync function and the 'it' block
});

