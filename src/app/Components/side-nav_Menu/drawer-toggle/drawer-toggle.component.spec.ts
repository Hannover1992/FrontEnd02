import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerToggleComponent } from './drawer-toggle.component';

describe('DrawerToggleComponent', () => {
  let component: DrawerToggleComponent;
  let fixture: ComponentFixture<DrawerToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawerToggleComponent]
    });
    fixture = TestBed.createComponent(DrawerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
