import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetButtonsComponent } from './asset-buttons.component';

describe('AssetButtonsComponent', () => {
  let component: AssetButtonsComponent;
  let fixture: ComponentFixture<AssetButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
