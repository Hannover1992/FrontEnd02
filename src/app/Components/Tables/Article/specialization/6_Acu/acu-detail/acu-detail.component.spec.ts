import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuDetailComponent } from './acu-detail.component';

describe('AcuDetailComponent', () => {
  let component: AcuDetailComponent;
  let fixture: ComponentFixture<AcuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
