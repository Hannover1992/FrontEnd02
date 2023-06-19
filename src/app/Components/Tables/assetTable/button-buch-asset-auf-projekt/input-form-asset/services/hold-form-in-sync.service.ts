import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HoldFormInSyncService {

  artikelFormSync = new BehaviorSubject(new FormGroup({}));
  constructor() { }
}
