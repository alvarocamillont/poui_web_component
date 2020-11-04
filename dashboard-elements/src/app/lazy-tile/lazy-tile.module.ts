import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTileComponent } from './lazy-tile.component';
import { createCustomElement } from '@angular/elements';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LazyTileComponent],
  imports: [CommonModule, SharedModule],
})
export class LazyTileModule {
  constructor(private injector: Injector) {
    const lazyTileCE = createCustomElement(LazyTileComponent, {
      injector: this.injector,
    });
    customElements.define('lazy-tile', lazyTileCE);
  }
}
