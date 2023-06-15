import {Component, inject, Injectable} from '@angular/core';
import {SmallVaterHelperService} from "./small-vater-helper.service";

@Component({
  selector: 'app-vater',
  templateUrl: './vater.component.html',
  styleUrls: ['./vater.component.css']
})

export abstract class VaterComponent {
  helper!: any;

  constructor(smallVar : SmallVaterHelperService) {
    this.helper = smallVar;
  }


  otherFun(){
    console.log("other fun Vater")
    this.helper.extendedInit();
  }


  abstract onClick() : void;

}
