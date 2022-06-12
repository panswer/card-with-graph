import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balances-total',
  templateUrl: './balances-total.component.html',
  styleUrls: ['./balances-total.component.css']
})
export class BalancesTotalComponent implements OnInit {

  balanceTotal: number = 921.48;

  constructor() { }

  ngOnInit(): void {
  }

}
