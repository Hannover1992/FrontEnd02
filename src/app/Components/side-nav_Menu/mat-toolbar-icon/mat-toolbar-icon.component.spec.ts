import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatToolbarIconComponent } from './mat-toolbar-icon.component';

describe('MatToolbarIconComponent', () => {
  let component: MatToolbarIconComponent;
  let fixture: ComponentFixture<MatToolbarIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatToolbarIconComponent]
    });
    fixture = TestBed.createComponent(MatToolbarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
