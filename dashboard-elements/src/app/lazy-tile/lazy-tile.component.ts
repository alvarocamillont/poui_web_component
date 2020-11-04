import { Component, Input, OnInit } from '@angular/core';
import { PoChartType, PoDonutChartSeries } from '@po-ui/ng-components';

@Component({
  selector: 'app-lazy-tile',
  templateUrl: './lazy-tile.component.html',
  styleUrls: ['./lazy-tile.component.css'],
})
export class LazyTileComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  serie: Array<PoDonutChartSeries>;

  chartType: PoChartType = PoChartType.Donut;

  constructor() {}

  ngOnInit(): void {
    this.serie = [
      { category: 'a', value: this.a },
      { category: 'b', value: this.b },
      { category: 'c', value: this.c },
    ];
  }
}
