import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd02';
  project: any;

  constructor(private http: HttpClient) {}


  get_post(){
    this.http.get('http://localhost:8080/project/0')
      .subscribe(data => {
        this.project = data;
      })
  }
}
