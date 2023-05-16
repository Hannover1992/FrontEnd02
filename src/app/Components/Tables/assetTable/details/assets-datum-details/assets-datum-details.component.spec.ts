import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDatumDetailsComponent } from './assets-datum-details.component';

describe('AssetsDatumDetailsComponent', () => {
  let component: AssetsDatumDetailsComponent;
  let fixture: ComponentFixture<AssetsDatumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetsDatumDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetsDatumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
