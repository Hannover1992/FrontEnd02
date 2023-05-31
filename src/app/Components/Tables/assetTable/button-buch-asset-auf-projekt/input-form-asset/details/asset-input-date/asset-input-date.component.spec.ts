import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputDateComponent } from './asset-input-date.component';

describe('AssetInputDateComponent', () => {
  let component: AssetInputDateComponent;
  let fixture: ComponentFixture<AssetInputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetInputDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
