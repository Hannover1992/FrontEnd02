import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaterComponent } from './vater.component';

describe('VaterComponent', () => {
  let component: VaterComponent;
  let fixture: ComponentFixture<VaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
