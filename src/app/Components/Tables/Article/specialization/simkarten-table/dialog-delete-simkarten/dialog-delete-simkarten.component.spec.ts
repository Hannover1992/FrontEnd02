import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteSimkartenComponent } from './dialog-delete-simkarten.component';

describe('DialogDeleteSimkartenComponent', () => {
  let component: DialogDeleteSimkartenComponent;
  let fixture: ComponentFixture<DialogDeleteSimkartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteSimkartenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteSimkartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
