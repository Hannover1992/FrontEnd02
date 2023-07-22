import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteRouterComponent } from './dialog-delete-router.component';

describe('DialogDeleteRouterComponent', () => {
  let component: DialogDeleteRouterComponent;
  let fixture: ComponentFixture<DialogDeleteRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
