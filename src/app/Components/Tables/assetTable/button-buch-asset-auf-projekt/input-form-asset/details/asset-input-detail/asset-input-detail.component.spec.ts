import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputDetailComponent } from './asset-input-detail.component';

describe('AssetInputDetailComponent', () => {
  let component: AssetInputDetailComponent;
  let fixture: ComponentFixture<AssetInputDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetInputDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
