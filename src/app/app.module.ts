import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { NoticeBoardComponent } from './project/notice-board/notice-board.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NoticeBoardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
