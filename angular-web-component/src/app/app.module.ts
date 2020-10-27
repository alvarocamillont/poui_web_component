import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxModule } from './info-box/info-box.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfoBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
