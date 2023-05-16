import { TestBed } from '@angular/core/testing';
import { KategorienWithSubkategorienService } from './kategorien-with-subkategorien.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('KategorienWithSubkategorienService', () => {
  let service: KategorienWithSubkategorienService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KategorienWithSubkategorienService]
    });
    service = TestBed.inject(KategorienWithSubkategorienService);
  });

  it('should retrieve KategorienWithSubkategorien from the API',async  () => {

    interface Kategorie {
      kategorie_id: number;
      kategoriename: string;
      subkategorien: UnterKategorie[];
    }

    interface UnterKategorie {
      unterkategorie_id: number;
      unterkategoriename: string;
      kategorie_id: number;
    }



    service.http.get<Kategorie[]>(service.generateURL())
      .subscribe((data: Kategorie[]) => {
        console.log(data)
        // done();
      })
  });
});
