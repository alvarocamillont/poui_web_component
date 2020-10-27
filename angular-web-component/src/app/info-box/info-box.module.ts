import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoBoxComponent } from './info-box.component';

@NgModule({
  declarations: [InfoBoxComponent],
  imports: [CommonModule, FormsModule],
  exports: [InfoBoxComponent],
})
export class InfoBoxModule {}
