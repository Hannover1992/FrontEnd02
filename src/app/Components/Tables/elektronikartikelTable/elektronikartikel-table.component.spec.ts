import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElektronikartikelTableComponent } from './elektronikartikel-table.component';

describe('ElektronikartikelTableComponent', () => {
  let component: ElektronikartikelTableComponent;
  let fixture: ComponentFixture<ElektronikartikelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElektronikartikelTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElektronikartikelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
