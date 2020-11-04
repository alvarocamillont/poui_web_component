import { Component, Input, OnInit } from '@angular/core';
import { PoChartType, PoDonutChartSeries } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.css'],
})
export class DashboardTileComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  serie: Array<PoDonutChartSeries>;

  chartType: PoChartType = PoChartType.Pie;

  constructor() {}

  ngOnInit(): void {
    this.serie = [
      { category: 'a', value: this.a },
      { category: 'b', value: this.b },
      { category: 'c', value: this.c },
    ];
  }
}
