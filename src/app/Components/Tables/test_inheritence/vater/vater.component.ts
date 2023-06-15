import { Component } from '@angular/core';

@Component({
  selector: 'app-vater',
  templateUrl: './vater.component.html',
  styleUrls: ['./vater.component.css']
})
export abstract class VaterComponent {

  otherFun(){
    console.log("other fun Vater")
  }


  abstract onClick() : void;

}
