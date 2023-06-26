import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";


export enum Zustand {
  NEU               = 'Neu',
  GUT               = 'Gut',
  MITTELMAESSIG     = 'Mittelmaessig',
  SCHLECHT          = 'Schlecht',
  KAPUTT            = 'Kaputt'
}

@Component({
  selector: 'app-article-input-detail',
  templateUrl: './article-input-detail.component.html',
  styleUrls: ['../../../../../../../../shared_css/input.css']
})
export class ArticleInputDetailComponent {
  @Input() article_details!: FormGroup;

  zustandOptions: Zustand[] = [
    Zustand.NEU,
    Zustand.GUT,
    Zustand.MITTELMAESSIG,
    Zustand.SCHLECHT,
    Zustand.KAPUTT
  ];



  constructor() { }

}
