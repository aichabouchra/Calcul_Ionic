import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  op1: number=0;
  op2: number=0;
  resultat: number=0;

  constructor() {}

  soustraction(): void{
    this.resultat = this.op1 - this.op2 ;
  }

}
