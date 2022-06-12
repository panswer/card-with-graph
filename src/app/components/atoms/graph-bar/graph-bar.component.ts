import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
  styleUrls: ['./graph-bar.component.css']
})
export class GraphBarComponent implements OnInit {
  @Input() day: string | undefined;
  @Input() amount: number | undefined;
  @Input() maxAmount: number | undefined;

  style: string = 'height:50%;';

  constructor() { }

  ngOnInit(): void {
    if (this.maxAmount && this.amount) {
      let num = (this.amount * 100) / (this.maxAmount);

      if (this.maxAmount === this.amount) {
        this.style = `height: ${num.toFixed(4)}%; background-color: var(--primary-color-cyan);`;
      } else {
        this.style = `height: ${num.toFixed(4)}%;`;
      }
    }
  }

}
