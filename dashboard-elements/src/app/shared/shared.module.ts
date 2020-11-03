import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule],
  exports: [PoModule],
})
export class SharedModule {}
