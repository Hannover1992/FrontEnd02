import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationProjectSucessComponent } from './notification-project-sucess.component';

describe('NotificationProjectSucessComponent', () => {
  let component: NotificationProjectSucessComponent;
  let fixture: ComponentFixture<NotificationProjectSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationProjectSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationProjectSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
