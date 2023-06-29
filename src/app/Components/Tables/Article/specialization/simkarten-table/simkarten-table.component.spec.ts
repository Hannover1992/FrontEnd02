import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimkartenTableComponent } from './simkarten-table.component';

describe('SimkartenTableComponent', () => {
  let component: SimkartenTableComponent;
  let fixture: ComponentFixture<SimkartenTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimkartenTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimkartenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
