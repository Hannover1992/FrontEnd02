import { TestBed } from '@angular/core/testing';
import { ErweiterterAssetRetrivalService } from './erweiterter-asset-retrival.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('ErweiterterAssetRetrivalService', () => {
  let service: ErweiterterAssetRetrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], // Include this line to provide FormBuilder
    });
    service = TestBed.inject(ErweiterterAssetRetrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
