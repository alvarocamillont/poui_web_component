import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private externalService: ExternalDashboardTileService) {}

  getData(): [number, number, number] {
    return [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
  }

  addDefault(): void {
    this.add('dashboard-tile');
  }

  addExternal(): void {
    this.externalService.load();
    this.add('external-dashboard-tile');
    //this.add('x-dropdown');
  }

  add(tileKind: string): void {
    const data = this.getData();
    console.log(data);

    const tile = document.createElement(tileKind);
    tile.setAttribute('class', 'po-md-4');
    tile.setAttribute('a', '' + data[0]);
    tile.setAttribute('b', '' + data[1]);
    tile.setAttribute('c', '' + data[2]);

    const content = document.getElementById('content');
    content.appendChild(tile);
  }

  ngOnInit(): void {}
}
