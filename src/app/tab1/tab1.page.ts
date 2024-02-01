import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  op1: number=0;
  op2: number=0;
  resultat: number=0;

  constructor() {}

  addition(): void{
    this.resultat = this.op1 + this.op2 ;
  }

}
