import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAssetComponent } from './dialog-delete-asset.component';

describe('DialogDeleteAssetComponent', () => {
  let component: DialogDeleteAssetComponent;
  let fixture: ComponentFixture<DialogDeleteAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
