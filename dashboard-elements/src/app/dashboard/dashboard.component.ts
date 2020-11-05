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

  open = false;

  toggle(event) {
    console.log(event);
    this.open = event.detail;
  }

  ngOnInit(): void {
    this.externalService.load('x-dropdown').subscribe(() => {
      this.add(
        'x-dropdown',
        'content2',
        {
          title: 'Olá componente dinâmico',
        },
        'po-md-4',
        { show: this.toggle.bind(this) },
        'ola!!!'
      );
    });
  }

  getData(): [string, string, string] {
    return [
      '' + Math.round(Math.random() * 100),
      '' + Math.round(Math.random() * 100),
      '' + Math.round(Math.random() * 100),
    ];
  }

  addDefault(): void {
    this.add('dashboard-tile', 'content', this.getPropData(), 'po-md-4');
  }

  addExternal(): void {
    this.externalService.load('external-dashboard-tile').subscribe(() => {
      this.add(
        'external-dashboard-tile',
        'content',
        this.getPropData(),
        'po-md-4 po-mt-1'
      );
    });
  }

  getPropData() {
    const [a, b, c] = this.getData();
    return { a, b, c };
  }

  add(
    tileKind: string,
    element: string,
    props?: { [key: string]: string },
    classStyle?: string,
    events?: { [key: string]: (event: any) => void },
    slotText?: string
  ): void {
    const tile = document.createElement(tileKind);

    if (props) {
      Object.keys(props).forEach((prop) => {
        tile.setAttribute(prop, props[prop]);
      });
    }

    if (events) {
      Object.keys(events).forEach((event) => {
        tile.shadowRoot.addEventListener(event, events[event]);
        console.log(tile.shadowRoot);
      });
    }

    if (classStyle) {
      tile.setAttribute('class', classStyle);
    }

    if (slotText) {
      tile.slot = slotText;
    }

    const content = document.getElementById(element);
    content.appendChild(tile);
  }
}
