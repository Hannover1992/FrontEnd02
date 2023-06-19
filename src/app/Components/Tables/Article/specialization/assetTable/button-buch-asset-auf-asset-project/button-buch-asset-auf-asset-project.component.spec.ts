import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBuchAssetAufAssetProjectComponent } from './button-buch-asset-auf-asset-project.component';

describe('ButtonBuchAssetAufAssetProjectComponent', () => {
  let component: ButtonBuchAssetAufAssetProjectComponent;
  let fixture: ComponentFixture<ButtonBuchAssetAufAssetProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonBuchAssetAufAssetProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBuchAssetAufAssetProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
