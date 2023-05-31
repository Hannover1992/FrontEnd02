import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormAssetComponent } from './input-form-asset.component';

describe('InputFormAssetComponent', () => {
  let component: InputFormAssetComponent;
  let fixture: ComponentFixture<InputFormAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormAssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFormAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
