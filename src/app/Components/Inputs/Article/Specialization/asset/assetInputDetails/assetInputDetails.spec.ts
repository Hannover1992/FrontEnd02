import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputDetails } from './assetInputDetails';

describe('AssetInputFormComponent', () => {
  let component: AssetInputDetails;
  let fixture: ComponentFixture<AssetInputDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetInputDetails ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
