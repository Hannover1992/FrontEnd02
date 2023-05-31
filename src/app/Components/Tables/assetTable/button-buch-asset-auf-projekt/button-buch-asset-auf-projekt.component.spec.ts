import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBuchAssetAufProjektComponent } from './button-buch-asset-auf-projekt.component';

describe('ButtonBuchAssetAufProjektComponent', () => {
  let component: ButtonBuchAssetAufProjektComponent;
  let fixture: ComponentFixture<ButtonBuchAssetAufProjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBuchAssetAufProjektComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBuchAssetAufProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
