import {
    AfterContentChecked,
  AfterViewInit,
  Component,
    ElementRef,
    EventEmitter, Input,
    NgZone,
    OnDestroy
} from '@angular/core';
import {BooleanInput} from "@angular/cdk/coercion";
import {Observable, Subject} from "rxjs";
import {AnimationEvent as AnimationEvent_2} from "@angular/animations";
import {FocusMonitor, FocusOrigin, FocusTrapFactory, InteractivityChecker} from "@angular/cdk/a11y";
import {Platform} from "@angular/cdk/platform";
import * as i0 from "@angular/core";
import {MatDrawer, MatDrawerContainer, MatDrawerMode, MatDrawerToggleResult} from "@angular/material/sidenav";

@Component({
  selector: 'app-drawer-toggle',
  templateUrl: './drawer-toggle.component.html',
  styleUrls: ['./drawer-toggle.component.css']
})
export class DrawerToggleComponent {

  @Input() drawer!: MatDrawer;
}
