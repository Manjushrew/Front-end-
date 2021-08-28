import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './pie component.html',
  styleUrls: [ './pie component.css' ]
})
export class PieChartComponent implements OnInit  {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  colors: any={'gray','purple','red'];
  public pieChartLegend = true;
  pieChartColors: any;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
    this.makeChartData();
  }
  makeChartData()
  {
    this.pieChartColors= [{backgroundColor: this.colors }];
    this.data=[1000,3000]
    this.labels=["latitude", "longtitude"]
   }
}
