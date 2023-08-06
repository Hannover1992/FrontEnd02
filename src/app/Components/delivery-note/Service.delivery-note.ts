import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Article} from "../../Interface/article";

@Injectable({
  providedIn: 'root'
})

export class DeliveryNoteService {
  constructor(private http: HttpClient) { }

  getProjectArticles(projectId: number): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:8080/project/${projectId}/articles`);
  }
}
