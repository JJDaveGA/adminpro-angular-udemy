import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doughnutchart',
  templateUrl: './doughnutchart.component.html',
  styles: []
})
export class DoughnutchartComponent implements OnInit {

  @Input('chartLabels') labels: string[] = [];
  @Input('chartData') data: number[] = [];
  type: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
