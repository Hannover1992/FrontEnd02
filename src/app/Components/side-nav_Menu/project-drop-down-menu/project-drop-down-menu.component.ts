import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ProjectsService} from "../../Tables/projectTable/service/projects.service";

@Component({
  selector: 'app-project-drop-down-menu',
  templateUrl: './project-drop-down-menu.component.html',
  styleUrls: ['./project-drop-down-menu.component.css']
})
export class ProjectDropDownMenuComponent {
  myControl = new FormControl('');
  projects: string[] = [];
  filteredOptions!: Observable<string[]>;

  constructor(private projectsService: ProjectsService) {
    this.projectsService.projects_observable.subscribe(
      (projects) => {
        this.projects = projects.map((project) => project.ID.toString())
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
    )
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.projects.filter(option => option.toLowerCase().includes(filterValue));
  }
}
