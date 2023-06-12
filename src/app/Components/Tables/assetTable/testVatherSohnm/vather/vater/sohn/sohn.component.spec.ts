import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SohnComponent } from './sohn.component';

describe('SohnComponent', () => {
  let component: SohnComponent;
  let fixture: ComponentFixture<SohnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SohnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SohnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
