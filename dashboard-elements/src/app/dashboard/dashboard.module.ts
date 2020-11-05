import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [DashboardComponent, DashboardTileComponent],
  imports: [CommonModule, SharedModule],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {
  constructor(private injector: Injector) {
    const tileCE = createCustomElement(DashboardTileComponent, {
      injector: this.injector,
    });
    customElements.define('dashboard-tile', tileCE);
  }
}
