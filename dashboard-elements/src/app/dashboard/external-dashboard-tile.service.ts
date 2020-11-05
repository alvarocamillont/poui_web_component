import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Custom, Customs } from './custom.interface';

@Injectable({
  providedIn: 'root',
})
export class ExternalDashboardTileService {
  constructor(private http: HttpClient) {}

  loaded: Customs = [];

  load(component: string) {
    if (this.loaded.find((custom) => custom.component === component)) {
      return of(true);
    }

    return this.http
      .get<Custom>(`http://localhost:3000/custom/${component}`)
      .pipe(
        map((custom) => ({ ...custom, src: atob(custom.src) })),
        map((custom) => {
          const { src, ...customNoSrc } = custom;
          this.loaded.push(customNoSrc);
          const script = document.createElement('script');
          script.text = src;
          document.body.appendChild(script);
          return true;
        })
      );
  }
}
