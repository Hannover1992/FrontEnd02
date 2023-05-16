import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NummernDetailsComponent } from './nummern-details.component';

describe('NummernDetailsComponent', () => {
  let component: NummernDetailsComponent;
  let fixture: ComponentFixture<NummernDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NummernDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NummernDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
