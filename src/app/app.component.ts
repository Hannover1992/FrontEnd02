import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd02';

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/project/0').subscribe(data => {
      console.log(data);
    });
  }
}
