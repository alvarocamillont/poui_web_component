import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';

@NgModule({
  declarations: [DashboardComponent, DashboardTileComponent],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule {}
