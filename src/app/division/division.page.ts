import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.page.html',
  styleUrls: ['./division.page.scss'],
})
export class DivisionPage{

  op1: number=0;
  op2: number=0;
  resultat: number=0;

  constructor() {}

  division(): void{
    this.resultat = this.op1 / this.op2 ;
  }

}
