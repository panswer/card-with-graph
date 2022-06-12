import { Component, OnInit } from '@angular/core';

import { DayAmount, DayAmountService } from '../../../services/test/day-amount.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  days: DayAmount[] = [{
    day: 'mon',
    amount: 0
  }, {
    day: 'tue',
    amount: 0
  }, {
    day: 'wed',
    amount: 0
  }, {
    day: 'thu',
    amount: 0
  }, {
    day: 'fri',
    amount: 0
  }, {
    day: 'sat',
    amount: 0
  }, {
    day: 'sun',
    amount: 0
  }];

  maxAmount: number = 0;

  constructor(
    private dayAmountService: DayAmountService
  ) { }

  ngOnInit(): void {
    this
      .dayAmountService
      .getAmountOfLastWeek()
      .subscribe(response => {
        this.maxAmount = response
          .map(day => day.amount)
          .reduce((previous, current) => previous < current ? current : previous);

        this.days = response;
      });
  }

}
