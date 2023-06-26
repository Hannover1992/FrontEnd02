import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputButtonsComponent } from './asset-input-buttons.component';

describe('AssetInputButtonsComponent', () => {
  let component: AssetInputButtonsComponent;
  let fixture: ComponentFixture<AssetInputButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetInputButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
