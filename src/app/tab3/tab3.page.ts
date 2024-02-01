import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  op1: number=0;
  op2: number=0;
  resultat: number=0;

  constructor() {}

  multiplication(): void{
    this.resultat = this.op1 * this.op2 ;
  }

}
