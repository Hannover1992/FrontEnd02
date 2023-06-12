import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSpecComponent } from './asset-spec.component';

describe('AssetSpecComponent', () => {
  let component: AssetSpecComponent;
  let fixture: ComponentFixture<AssetSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetSpecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
