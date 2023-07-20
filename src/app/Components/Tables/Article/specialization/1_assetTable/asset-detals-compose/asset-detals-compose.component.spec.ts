import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetalsComposeComponent } from './asset-detals-compose.component';

describe('AssetDetalsComposeComponent', () => {
  let component: AssetDetalsComposeComponent;
  let fixture: ComponentFixture<AssetDetalsComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetDetalsComposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetDetalsComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
