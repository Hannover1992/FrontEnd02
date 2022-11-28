import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ProjectComponent} from "./project/project.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [
        AppComponent,
        ProjectComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FrontEnd02'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FrontEnd02');
  });

});
