import { TestBed } from '@angular/core/testing';

import { AssetTableService } from './asset-table.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ActivatedRoute} from "@angular/router";

describe('AssetTableService', () => {
  let service: AssetTableService;
  let httpTestingController: HttpTestingController;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => 802007, // Beispielhafte ID oder Wert, der von der Funktion erwartet wird
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AssetTableService,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });
    service = TestBed.inject(AssetTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('call get assets', async (done   ) => {
// Call the get_assets function
    service.get_assets()
      .then((data: any) => {
        expect(data).toBe('assets');
        done();
      });
  });

});
