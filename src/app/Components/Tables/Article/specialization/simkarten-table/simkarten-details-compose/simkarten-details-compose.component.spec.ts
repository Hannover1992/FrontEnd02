import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimkartenDetailsComposeComponent } from './simkarten-details-compose.component';

describe('SimkartenDetailsComposeComponent', () => {
  let component: SimkartenDetailsComposeComponent;
  let fixture: ComponentFixture<SimkartenDetailsComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimkartenDetailsComposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimkartenDetailsComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
