import {Component, Input} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";
import {KategorienWithSubkategorienService} from "../../../../Services/kategorien-with-subkategorien.service";

@Component({
  selector: 'app-project-button',
  templateUrl: './project-button.component.html',
  styleUrls: ['./project-button.component.css']
})
export class ProjectButtonComponent {

  constructor(
      private current_menu : KategorienWithSubkategorienService,
  ) {
  }
  @Input() drawerRef: any;

  kategory_transision(kategory_name: string): void {
    this.drawerRef.toggle();
    this.current_menu.current_kategory_name = kategory_name;
  }
}
