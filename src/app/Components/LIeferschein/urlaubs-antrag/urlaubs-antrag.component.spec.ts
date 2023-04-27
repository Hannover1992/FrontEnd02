import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlaubsAntragComponent } from './urlaubs-antrag.component';

describe('UrlaubsAntragComponent', () => {
  let component: UrlaubsAntragComponent;
  let fixture: ComponentFixture<UrlaubsAntragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlaubsAntragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlaubsAntragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
