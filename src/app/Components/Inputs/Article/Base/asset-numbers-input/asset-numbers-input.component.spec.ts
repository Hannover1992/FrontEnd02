import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetNumbersInputComponent } from './asset-numbers-input.component';

describe('AssetNumbersInputComponent', () => {
  let component: AssetNumbersInputComponent;
  let fixture: ComponentFixture<AssetNumbersInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetNumbersInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetNumbersInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
