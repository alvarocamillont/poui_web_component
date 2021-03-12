import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private externalService: ExternalDashboardTileService) {}

  open = false;
  personType: string = 'CPF';
  cnpj = 'aaa';

  readonly personOptions: Array<PoRadioGroupOption> = [
    { label: 'Jurídica', value: 'CNPJ' },
    { label: 'Física', value: 'CPF' },
  ];

  setCNPJ(event) {
    const { value } = event.detail;
    this.cnpj = value;
  }

  customComponents = [];

  changePerson(personType) {
    this.notifyAll({ personType });
  }

  toggle(event) {
    console.log(event);
    this.open = event.detail.show;
  }

  ngOnInit(): void {
    this.externalService.load('pods-button').subscribe(() => {
      this.add(
        'pods-button',
        'content2',
        {
          label: 'Botão de Teste',
        },
        'po-md-4',
        { clickButton: this.toggle.bind(this) },
        'Teste'
      );
    });

    this.externalService.load('pods-input-cnpj').subscribe(() => {
      const content = this.add(
        'pods-input-cnpj',
        'content3',
        {},
        'po-md-4',
        { emitValue: this.setCNPJ.bind(this) },
        'Teste'
      );

      this.customComponents.push(content);
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
  ): any {
    const tile = document.createElement(tileKind);

    if (props) {
      Object.keys(props).forEach((prop) => {
        tile.setAttribute(prop, props[prop]);
      });
    }

    if (events) {
      Object.keys(events).forEach((event) => {
        tile.addEventListener(event, events[event]);
      });
    }

    if (classStyle) {
      tile.setAttribute('class', classStyle);
    }

    if (slotText) {
      tile.innerHTML = slotText;
    }

    const content = document.getElementById(element);
    content.appendChild(tile);

    return tile;
  }

  notifyAll(props) {
    this.customComponents.forEach((component) => {
      component.notify(props);
    });
  }
}
