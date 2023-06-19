import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInputComposeComponent } from './asset-input-compose.component';

describe('AssetInputComposeComponent', () => {
  let component: AssetInputComposeComponent;
  let fixture: ComponentFixture<AssetInputComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetInputComposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetInputComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
