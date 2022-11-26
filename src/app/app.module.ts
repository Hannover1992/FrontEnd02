import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { NoticeBoardComponent } from './project/notice-board/notice-board.component';
import { JumbleTestComponent } from './juble_code/jumble-test/jumble-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NoticeBoardComponent,
    JumbleTestComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
