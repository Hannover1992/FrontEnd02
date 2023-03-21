import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationProjectErfolgComponent } from './notification-project-erfolg.component';

describe('NotificationProjectErfolgComponent', () => {
  let component: NotificationProjectErfolgComponent;
  let fixture: ComponentFixture<NotificationProjectErfolgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationProjectErfolgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationProjectErfolgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
