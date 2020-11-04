import { Component, Input, OnInit } from '@angular/core';
import { PoChartType, PoDonutChartSeries } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.css'],
})
export class DashboardTileComponent implements OnInit {
  @Input() a: string;
  @Input() b: string;
  @Input() c: string;

  serie: Array<PoDonutChartSeries>;

  chartType: PoChartType = PoChartType.Pie;

  constructor() {}

  ngOnInit(): void {
    this.serie = [
      { category: 'a', value: parseInt(this.a) },
      { category: 'b', value: parseInt(this.b) },
      { category: 'c', value: parseInt(this.c) },
    ];
    console.log(this.serie);
  }
}
