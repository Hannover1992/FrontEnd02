import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComposeComponent } from './asset-compose.component';

describe('AssetComposeComponent', () => {
  let component: AssetComposeComponent;
  let fixture: ComponentFixture<AssetComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetComposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
