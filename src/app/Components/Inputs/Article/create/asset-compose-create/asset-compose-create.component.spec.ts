import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetComposeCreateComponent } from './asset-compose-create.component';

describe('AssetComposeCreateComponent', () => {
  let component: AssetComposeCreateComponent;
  let fixture: ComponentFixture<AssetComposeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetComposeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetComposeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
