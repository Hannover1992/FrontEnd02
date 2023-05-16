import {Component, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith, Subject} from "rxjs";
import {ProjectsService} from "../../Tables/projectTable/service/projects.service";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";

@Component({
  selector: 'app-project-drop-down-menu',
  templateUrl: './project-drop-down-menu.component.html',
  styleUrls: ['./project-drop-down-menu.component.css']
})

export class ProjectDropDownMenuComponent {
  myControl = new FormControl('');
  projects: string[] = [];
  filteredOptions!: Observable<string[]>;
  @ViewChild(MatAutocompleteTrigger) autoInput!: MatAutocompleteTrigger;

  constructor(private projectsService: ProjectsService) {
    this.get_drop_down_menu_projects();
  }

  private get_drop_down_menu_projects() {
    this.projectsService.projects.subscribe(
      (projects) => {
        this.projects = projects.map((project) => project.ID.toString())
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
    )
  }

  onOptionSelected(event: any) {
    console.log(event.option.value);
    this.projectsService.selectedProject.next(event.option.value);
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.projects.filter(option => option.toLowerCase().includes(filterValue));
  }
}
