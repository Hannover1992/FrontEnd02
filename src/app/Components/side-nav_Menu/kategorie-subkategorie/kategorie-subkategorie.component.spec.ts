import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieSubkategorieComponent } from './kategorie-subkategorie.component';

describe('KategorieSubkategorieComponent', () => {
  let component: KategorieSubkategorieComponent;
  let fixture: ComponentFixture<KategorieSubkategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorieSubkategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategorieSubkategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
