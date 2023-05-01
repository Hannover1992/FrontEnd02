import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTableComponent } from './assetTable.component';
import {HttpClientModule} from "@angular/common/http";
import {ProjectsService} from "../projectTable/service/projects.service";
import {AssetTableService} from "./service/asset-table.service";

describe('AssetTableComponent', () => {
  let component: AssetTableComponent;
  let fixture: ComponentFixture<AssetTableComponent>;
  let service: any;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ AssetTableComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssetTableComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AssetTableService);
    fixture.detectChanges();
  });


  it('ich einstelle die testumgebung fur die ', () => {

  });
});
